#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { loadDSLFromFile, updatePathway, callPathway } = require("../src/utils"); // Importing utility functions
const { readConfig } = require("../src/config")

const config = readConfig();

if (!config || Object.keys(config).length === 0) {
    console.error(
        "No configuration found. Please ensure you have a .blandrc file in your home directory or the current directory."
        );
    return;
}

const argv = yargs(hideBin(process.argv))
  .scriptName("bland")
  .command(
    "parse <file>",
    "Parse the DSL file",
    (yargs) => {
      return yargs.positional("file", {
        describe: "path to the .bland file",
        type: "string",
        demandOption: true,
      });
    },
    (args) => {
      try {
        loadDSLFromFile(args.file);
      } catch (err) {
        console.error("Error parsing the file:", err.message);
      }
    }
  )
  .command(
    "run <file>",
    "Parse and update the DSL",
    (yargs) => {
      return yargs.positional("file", {
        describe: "path to the .bland file",
        type: "string",
        demandOption: true,
      });
    },
    async (args) => {
      try {
        if (!config.apiKey) {
          console.error(
            "API key not found. Please ensure your .blandrc contains a valid 'apiKey' entry."
          );
          return;
        }
        const res = await loadDSLFromFile(args.file);
        await updatePathway(
          res.pathway_id,
          res.nodes,
          res.edges,
          res.name,
          config.apiKey
        );
      } catch (err) {
        console.error("Error updating the file:", err);
      }
    }
  )
  .command(
    "call <file>",
    "Parse, update, and call the DSL",
    (yargs) => {
      return yargs.positional("file", {
        describe: "path to the .bland file",
        type: "string",
        demandOption: true,
      });
    },
    async (args) => {
      try {
        if (!config.apiKey) {
          console.error(
            "API key not found. Please ensure your .blandrc contains a valid 'apiKey' entry."
          );
          return;
        }
        const res = await loadDSLFromFile(args.file);
        await updatePathway(
          res.pathway_id,
          res.nodes,
          res.edges,
          res.name,
          config.apiKey
        );
        await callPathway(
          res.pathway_id
        );
      } catch (err) {
        console.error("Error in processing the call:", err);
      }
    }
  )
  .help()
  .alias("help", "h").argv;
