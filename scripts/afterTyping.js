const fs = require('fs-extra');
const { getRelativePath } = require('./utils');

(async () => {
  await fs.ensureDirSync(getRelativePath('../dist/es'));
  await fs.ensureDirSync(getRelativePath('../dist/lib'));
  await fs.copySync(getRelativePath('../dist/types'), getRelativePath('../dist/es'));
  await fs.copySync(getRelativePath('../dist/types'), getRelativePath('../dist/lib'));
  await fs.removeSync(getRelativePath('../dist/types'));
})();
