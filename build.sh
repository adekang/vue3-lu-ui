#!/usr/bin/env bash

cd packages/utils &&
pnpm build &&
nrm use npm &&
pnpm publish &&
cd ../../ &&
pnpm build &&
pnpm publish -F lu-ui &&
pnpm clean &&
pnpm publish &&
nrm use taobao

echo "打包并上传成功！！"
