{
  lib,
  name ? "",
  stdenv,
  bun,
  cacert,
  nodejs-slim_22,
  nodePackages,
  inputs,
}:
let
  inherit (inputs) nix-filter;
  hashes = {
    "aarch64-darwin" = {
      outputHash = "sha256-hWaad3tsqMe+3ps404MKa6ab60YuCkP2uCu8DHvE/vo=";
    };
    "x86_64-linux" = {
      outputHash = "sha256-idxXQ4j9Xrt2psk2YrPOVfOWUslyKSr0OfT0p4I4a+Q=";
    };
  };

  bunDeps = stdenv.mkDerivation {
    name = "${name}-bun-deps";
    src = nix-filter.lib {
      root = ../.;
      exclude = [
        ../.next
        ../node_modules
      ];
    };
    buildInputs = [ bun ];
    dontBuild = true;
    dontConfigure = true;
    dontFixup = true;
    installPhase = ''
      bun install --ignore-scripts --frozen-lockfile
      cp -r ./node_modules $out
    '';
    outputHashAlgo = "sha256";
    outputHashMode = "recursive";
    outputHash = hashes.${stdenv.hostPlatform.system}.outputHash;
    # outputHash = lib.fakeHash;
  };
in
assert builtins.hasAttr stdenv.hostPlatform.system hashes;
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
    nodejs-slim_22
    bun
    nodePackages.npm
  ];

  buildPhase = ''
    runHook preBuild

    cp -r ${bunDeps} ./node_modules
    chmod -R +xw ./node_modules
    patchShebangs ./node_modules
    bun run build

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $out
    patchShebangs ./.next
    mv .next/standalone $out/bin
    cp -R public $out/bin/public
    mv .next/static $out/bin/.next/static
    cat <<ENTRYPOINT > $out/bin/entrypoint
    #!${stdenv.shell}
    ${bun}/bin/bun $out/bin/server.js
    ENTRYPOINT
    chmod +x $out/bin/entrypoint

    runHook postInstall
  '';

  meta.mainProgram = "entrypoint";
}
