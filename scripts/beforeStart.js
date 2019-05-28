const fs = require('fs-extra');
const { getRelativePath } = require('./utils');

(async () => {
  await fs.removeSync(getRelativePath('../dist'));
})();
