// credits to https://github.com/jrans/Node-Git-Hooks
/* eslint-disable no-console */
'use strict'; // eslint-disable-line strict

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const hiddenHooksFolderPath = path.join(__dirname, '../.git/hooks');
const hooksFolderPath = path.join(__dirname, 'hooks');
const hooks = fs.readdirSync(hooksFolderPath); // eslint-disable-line no-sync

function copyFile(source, target, cb) {
  let cbCalled = false;
  const rd = fs.createReadStream(source);
  const wr = fs.createWriteStream(target);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }

  rd.on('error', done);
  wr.on('error', done);
  wr.on('close', done);
  rd.pipe(wr);
}

hooks.forEach(hook => {
  const hookSource = path.join(hooksFolderPath, hook);
  const hookTarget = path.join(hiddenHooksFolderPath, hook);

  copyFile(hookSource, hookTarget, err => {
    if (!err) {
      console.log(`${hook} added to your .git/hooks folder`);
      exec(
        `chmod +x ${hookTarget}`,
        error => {
          if (!error) {
            console.log(`${hookTarget} made executable`);
          }
        }
      );
    }
  });
});
