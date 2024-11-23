build:
  nix build .#frontend-app

build-docker:
  nix build .#frontend-image
