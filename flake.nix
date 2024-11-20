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
    nix2container.url = "github:nlewo/nix2container";
  };

  outputs =
    inputs@{
      self,
      nixpkgs,
      flake-parts,
      systems,
      hex,
      nix2container,
      ...
    }:
    let
      name = "wuz.sh";
    in
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = import systems;
      flake = {
        overlays.default = self: super: {
          bun-latest = self.callPackage ./nix/bun.nix { };
          frontend-app = self.callPackage ./nix/app.nix { inherit inputs name; };
          frontend-image = self.callPackage ./nix/docker.nix { inherit inputs; };
        };
      };
      perSystem =
        {
          pkgs,
          system,
          self',
          ...
        }:
        let
          _hex = hex.packages.${system};
          nix2containerPkgs = nix2container.packages.${system};
        in
        {
          _module.args.pkgs = import nixpkgs {
            inherit system;
            config.allowUnfree = true;
            overlays = [ self.overlays.default ];
          };

          packages = {
            inherit (pkgs) bun-latest frontend-app frontend-image;
            hello = nix2containerPkgs.nix2container.buildImage {
              name = "hello";
              config = {
                entrypoint = [ "${pkgs.hello}/bin/hello" ];
              };
            };
          };

          devShells.default = pkgs.mkShell {
            packages = with pkgs; [
              nodejs
              bun-latest
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
