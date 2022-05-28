#!/usr/bin/env bash

pnpm build &&
pnpm publish -F lu-ui &&
pnpm clean

