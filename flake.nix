{
  nixConfig = {
    extra-substituters = [ "https://wuz.cachix.org" ];
    extra-trusted-public-keys = [
      "wuz.cachix.org-1:cvFztsdv6usx0iXXs9tbskFTxaozacGaE4WG1uW6W1M="
    ];
  };
  description = "wuz.sh nix";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    hex.url = "github:jpetrucciani/hex";
    hex.inputs.nixpkgs.follows = "nixpkgs";
    nix-filter.url = "github:numtide/nix-filter";
    jacobi.url = "github:jpetrucciani/nix";
  };

  outputs =
    inputs@{
      self,
      nixpkgs,
      flake-parts,
      systems,
      hex,
      ...
    }:
    let
      name = "wuz.sh";
    in
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import systems;
      flake = {
        overlays.default = self: super: rec {
          frontend-app = self.callPackage ./nix/app.nix { inherit inputs name; };
          frontend-image = self.callPackage ./nix/docker.nix { inherit inputs frontend-app; };
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
        in
        {
          _module.args.pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
            overlays = [ self.overlays.default ];
          };

          packages = {
            inherit (pkgs) bun-latest frontend-app frontend-image;
          };

          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs
              bun
              nodePackages.typescript
              nodePackages.typescript-language-server
              hcloud
              opentofu
              kubectl
              _hex.hex
            ];
          };
        };
    };
}
