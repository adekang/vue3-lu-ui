#!/usr/bin/env bash

cd packages/utils &&
pnpm build &&
cd ../../ &&
pnpm clean
cd packages/ui &&
pnpm npm run build

