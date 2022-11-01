function openReadLine() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return rl;
}

module.exports = openReadLine ;