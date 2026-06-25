{
  nixConfig = {
    extra-substituters = [
      "https://wuz.cachix.org"
      "https://nix-community.cachix.org"
    ];
    extra-trusted-public-keys = [
      "wuz.cachix.org-1:cvFztsdv6usx0iXXs9tbskFTxaozacGaE4WG1uW6W1M="
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
    ];
  };
  description = "wuz.sh nix";

  inputs = {
    treefmt-nix.url = "github:numtide/treefmt-nix";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    hex.url = "github:jpetrucciani/hex";
    hex.inputs.nixpkgs.follows = "nixpkgs";
    nix-filter.url = "github:numtide/nix-filter";
    jacobi.url = "github:jpetrucciani/nix";
    bun2nix.url = "github:nix-community/bun2nix";
  };

  outputs =
    inputs@{
      self,
      nixpkgs,
      flake-parts,
      systems,
      hex,
      treefmt-nix,
      bun2nix,
      ...
    }:
    let
      name = "wuz.sh";
    in
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import systems;
      flake = {
        overlays.default = _self: _super: rec {
          frontend-app = _self.callPackage ./nix/app.nix {
            inherit name;
            bun2nix-cli = bun2nix.packages.${_self.system}.default;
          };
          frontend-image = _self.callPackage ./nix/docker.nix {
            inherit inputs frontend-app;
          };
        };
      };
      perSystem =
        {
          pkgs,
          system,
          ...
        }:
        let
          _hex = hex.packages.${system};
          treefmtEval = treefmt-nix.lib.evalModule pkgs ./treefmt.nix;
          bun2nix-cli = bun2nix.packages.${system}.default;
        in
        {
          _module.args.pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
            overlays = [ self.overlays.default ];
          };

          formatter = treefmtEval.config.build.wrapper;
          # for `nix flake check`
          checks = {
            formatting = treefmtEval.config.build.check self;
          };

          packages = {
            inherit (pkgs)
              frontend-app
              frontend-image
              skopeo
              ;
            inherit bun2nix-cli;
          };

          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              treefmt
              bun
              bun2nix-cli
              hcloud
              opentofu
              kubectl
              _hex.hex
            ];
          };
        };
    };
}
