const fs = require('fs-extra');
const { getRelativePath } = require('./utils');

(async () => {
  await fs.copySync(getRelativePath('../dist/types'), getRelativePath('../dist/es'));
  await fs.removeSync(getRelativePath('../dist/types'));
})();
  
