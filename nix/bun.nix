{
  stdenv,
  lib,
  fetchurl,
  unzip,
  openssl,
  autoPatchelfHook,
}:
stdenv.mkDerivation rec {
  version = "1.1.34";
  name = "bun";
  src =
    passthru.sources.${stdenv.hostPlatform.system}
      or (throw "Unsupported system: ${stdenv.hostPlatform.system}");
  passthru = {
    sources = {
      "aarch64-darwin" = fetchurl {
        url = "https://github.com/oven-sh/bun/releases/download/bun-v${version}/bun-darwin-aarch64.zip";
        hash = "sha256-unFn4bexupfjtFA6Nxzi/vC1stzuBXYP5jPfwXbZDig=";
      };
      "aarch64-linux" = fetchurl {
        url = "https://github.com/oven-sh/bun/releases/download/bun-v${version}/bun-linux-aarch64.zip";
        hash = "sha256:1q680yax1x8blbsvpyn716h4j69rsd0m80lvi9plgjbf4h9jb1h4";
      };
    };
  };
  strictDeps = true;
  nativeBuildInputs = [
    unzip
  ] ++ lib.optionals stdenv.isLinux [ autoPatchelfHook ];
  buildInputs = [ openssl ];
  dontConfigure = true;
  dontBuild = true;
  installPhase = ''
    runHook preInstall

    install -Dm 755 ./bun $out/bin/bun
    ln -s $out/bin/bun $out/bin/bunx

    runHook postInstall
  '';
}
