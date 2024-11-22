{ name ? ""
, stdenv
, bun
, nodejs-slim_22
, cacert
, inputs
, nodePackages
, openssl
}:
let
  inherit (inputs) nix-filter;
in
stdenv.mkDerivation {
  __noChroot = true;
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
    bun
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
    rm -rf node_modules
    bun install --no-progress --frozen-lockfile --production

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $out
    mv .next/standalone $out/bin
    cp -R public $out/bin/public
    mv .next/static $out/bin/.next/static
    cat <<ENTRYPOINT > $out/bin/entrypoint
    #!${stdenv.shell}
    exec "${bun}/bin/bun" "$out/bin/server.js" "$$@"
    ENTRYPOINT
    chmod +x $out/bin/entrypoint

    runHook postInstall
  '';

  meta.mainProgram = "entrypoint";
}
