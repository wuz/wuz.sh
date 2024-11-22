{ inputs
, frontend-app
}:
let
  inherit (inputs.jacobi.packages.x86_64-linux.foundry) foundry_v2;
in
foundry_v2 {
  name = "wuz-sh";
  registry = "ghcr.io/wuz";
  author = "c@wuz.sh";
  enableNix = false;
  sysLayer = false;
  layers = [ [ frontend-app ] ];
  extraConfig = {
    Cmd = [ "/bin/entrypoint" ];
  };
}
