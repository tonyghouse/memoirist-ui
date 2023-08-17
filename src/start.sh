echo Checking Node version: $(node --version)
npm ci --legacy-peer-deps
npx http-server ./dist