#!/usr/bin/env node
import {config} from "../config.js";
import subtitleMerge from "../lib/index.js";

const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('At least 2 params are required: `mainSrtPath` and secondarySrtPath.');
    process.exit(1);
}

const mainSrtPath = args[0];
const secondarySrtPath = args[1];
const outputPath = args.length > 2 ? args[2] : config.workdir + config.srtFile;

if (args.length === 2) {
    console.log(`\`outputPath\` not supplied, will default to \`${outputPath}\`.`);
}

subtitleMerge(mainSrtPath, secondarySrtPath, outputPath);
