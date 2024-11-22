# wuz.sh

## Built with NextJS + Bun + Nix

The repo for my personal site, built with NextJS and designed for running with
Bun through Nix.

![image of wuz.sh](https://github.com/user-attachments/assets/476f3fea-e5f3-42c0-9baf-9bd3cf1ecc33)

## Running with Nix

The NextJS app can be built using Nix and Bun with the following command:

```bash
nix build .#frontend-app
```

That will output a `result` folder with an `entrypoint` script inside that can
be used to run the NextJS site as a standalone app with:

```bash
./result/entrypoint
```

You can also just run the app in the same way:

```bash
nix run .#frontend-app
```

## Running with docker

You can build a docker image with nix and copy into the docker daemon like so:

```bash
nix run .#frontend-image.copyToDockerDaemon
```
