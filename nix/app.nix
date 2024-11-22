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
  # nodeDeps = yarn2nix-moretea.mkYarnModules {
  #   pname = "${name}-modules";
  #   packageJSON = ../package.json;
  #   yarnLock = ../yarn.lock;
  #   # yarnLock = runCommand "yarn.lock" { } ''
  #   #   cp ${../bun.lockb} ./bun.lockb
  #   #   cp ${../package.json} ./package.json
  #   #   ${bun}/bin/bun install --yarn --offline
  #   #   mv yarn.lock $out
  #   # '';
  #   version = "0.0.1";
  # };

  hashes = {
    "aarch64-darwin" = {
      outputHash = "sha256-hWaad3tsqMe+3ps404MKa6ab60YuCkP2uCu8DHvE/vo=";
    };
    "x86_64-linux" = {
      outputHash = "sha256-UCKaqVIsZALW4Q0FuDxXMMEHBxtc9Z3J6w9WGz9JeXU=";
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
    installPhase = ''
      export HOME=$TMPDIR
      bun install --ignore-scripts --frozen-lockfile
      cp -r ./node_modules $out
    '';
    dontFixup = true;
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
    export HOME=$TMPDIR
    cp -r ${bunDeps} ./node_modules
    chmod -R +x ./node_modules
    bun run build
  '';

  installPhase = ''
    mkdir -p $out
    mv .next/standalone $out/bin
    cp -R public $out/bin/public
    mv .next/static $out/bin/.next/static
    cat <<ENTRYPOINT > $out/bin/entrypoint
    #!${stdenv.shell}
    ${bun}/bin/bun $out/bin/server.js
    ENTRYPOINT
    chmod +x $out/bin/entrypoint
  '';

  meta.mainProgram = "entrypoint";
}
