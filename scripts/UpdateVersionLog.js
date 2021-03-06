const fs = require('fs');
const gitRev = require('git-rev');

const pkg = require('../package.json');

// Read file.
const contents = fs.readFileSync('./src/index.js', 'utf-8');

// Update log message in index.js.
gitRev.short(hash => {
  const timestamp = getBuildTimestamp();
  const newContents = contents.replace(
    /console.log\('Version:.*\)/,
    `console.log('Version: ${pkg.version} (Date ${timestamp}, Commit #${hash})')`);
  fs.writeFileSync('./src/index.js', newContents);
});

/**
 * @returns {string} of format `2017-12-25`.
 */
function getBuildTimestamp () {
  const timestamp = new Date().toISOString().slice(0, 10);
  return timestamp;
}
