{
  inputs,
  stdenv,
  dockerTools,
  docker,
  hello,
# bun-latest,
# frontend-app,
# buildEnv,
}:
let
  inherit (inputs) nix-filter;
  # baseImage = dockerTools.pullImage {
  #   imageName = "alpine";
  #   imageDigest = "sha256:1304f174557314a7ed9eddb4eab12fed12cb0cd9809e4c28f29af86979a3c870";
  #   sha256 = "sha256-uaJxeiRm94tWDBTe51/KwUBKR2vj9i4i3rhotsYPxtM=";
  #   finalImageTag = "3.16.2";
  #   finalImageName = "alpine";
  # };

in
# config = {
#   Workdir = "/app";
#   Env = [ "NODE_ENV=production" ];
# };
dockerTools.buildImage {
  name = "hello-docker";
  copyToRoot = with dockerTools; [
    usrBinEnv
    binSh
    caCertificates
    fakeNss
  ];
  config = {
    Cmd = [ "${hello}/bin/hello" ];
  };
}
# dockerTools.buildLayeredImage {
#   name = "${frontend-app.name}-image";
#   tag = "latest";
#   contents = buildEnv {
#     name = "${frontend-app.name}-root-env";
#     paths = [
#       bun-latest
#       frontend-app
#     ];
#   };
#   config = {
#     Env = [ "NODE_ENV=production" ];
#     Cmd = [ "/entrypoint" ];
#     ExposedPorts = {
#       "80/tcp" = { };
#     };
#   };
# }
