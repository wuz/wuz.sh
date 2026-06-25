{
  lib,
  name ? "",
  bun2nix-cli,
  cacert,
  stdenv,
}:
let
  bun2nix = bun2nix-cli;
in
bun2nix.writeBunApplication {
  pname = name;
  version = "0.1.0";

  src = lib.cleanSource ../.;

  NODE_EXTRA_CA_CERTS = "${cacert}/etc/ssl/certs/ca-bundle.crt";

  # nextjs needs platform-specific bun instances
  bunInstallFlags = [
    "--cpu=*"
  # non-linux builds need symlinks instead of hardlinks for nextjs
  ] ++ lib.optionals (stdenv.hostPlatform.system != "x86_64-linux") [
    "--linker=isolated"
    "--backend=symlink"
  ];

  buildPhase = ''
    bun run build
  '';

  # nextjs binds to a port during the build process
  __darwinAllowLocalNetworking = true;

  # standalone output places server.js at .next/standalone/server.js
  startScript = ''
    bun .next/standalone/server.js
  '';

  bunDeps = bun2nix.fetchBunDeps {
    bunNix = ../bun.nix;
  };
}
