FROM nixos/nix:2.24.2 AS base

WORKDIR /app

COPY --link . .

RUN nix build --accept-flake-config --extra-experimental-features 'nix-command flakes' .#frontend-app

# FROM alpine:3.20 AS result
#
# COPY --from=base /app/result /app/result
