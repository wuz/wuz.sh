{
  name ? "",
  stdenv,
  bun-latest,
  nodejs-slim_22,
  cacert,
  inputs,
  nodePackages,
  openssl,
}:
let
  inherit (inputs) nix-filter;
in
stdenv.mkDerivation {
  NODE_EXTRA_CA_CERTS = "${cacert}/etc/ssl/certs/ca-bundle.crt";
  name = "${name}-frontend";
  src = nix-filter.lib {
    root = ../.;
    exclude = [
      ../.next
      ../node_modules
    ];
  };

  nativeBuildInputs = [
    openssl
    nodePackages.npm
    bun-latest
    nodejs-slim_22
  ];

  configurePhase = ''
    runHook preConfigure

    bun install --no-progress --frozen-lockfile

    runHook postConfigure
  '';

  buildPhase = ''
    runHook preBuild

    export HOME=$TMPDIR
    bun run build

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mv .next/standalone $out
    cp -R public $out/public
    mv .next/static $out/.next/static
    mv node_modules $out/node_modules
    cat <<ENTRYPOINT > $out/entrypoint
    #!${stdenv.shell}
    exec "${bun-latest}/bin/bun" "$out/server.js" "$$@"
    ENTRYPOINT
    chmod +x $out/entrypoint

    runHook postInstall
  '';
}
