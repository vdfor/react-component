const { exec } = require('child_process');

exec(`yarn version --new-version ${process.env.POST_VERSION}`, (err) => {
  if (err) {
    throw err;
  }
  exec([
    'git push --tags',
    'git push'
  ].join(' && '));
});
