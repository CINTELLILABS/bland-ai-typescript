const fs = require("fs");
const os = require("os");
const path = require("path");

function readConfig() {
    let configPath;
  const localConfigPath = path.resolve(process.cwd(), '.blandrc');
  if (fs.existsSync(localConfigPath)) {
      configPath = localConfigPath;
  }
  if (!configPath) {
    const homeDir = os.homedir();
    const globalConfigPath = path.resolve(homeDir, '.blandrc');
    if (fs.existsSync(globalConfigPath)) {
        configPath = globalConfigPath;
    }
  }
  if (!configPath) {
    return {};  
}
  try {
    if (fs.existsSync(configPath)) {
      const configContents = fs.readFileSync(configPath, "utf8");
      return JSON.parse(configContents);
    }
  } catch (err) {
    console.error("Error reading or parsing the .blandrc file:", err);
  }
  return {}; // return an empty object if no config is found
}

module.exports = { readConfig };
