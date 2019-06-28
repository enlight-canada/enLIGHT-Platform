echo Building app
set -x
cd app
npm install
cd ..
set +x

echo Building api
set -x
cd api
npm install
cd ..
set +x