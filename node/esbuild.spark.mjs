import esbuild from "esbuild";
import { stylePlugin } from "@toolbarthomas/enlightenment/stylePlugin";
import { resolvePlugin } from "@toolbarthomas/enlightenment/resolvePlugin";
import { parse } from "@toolbarthomas/argumentje";
import { glob } from "glob";

const argv = parse();

const format = argv.f || argv.format || "esm";
const suffix = argv.m || argv.minify ? ".min" : "";
const outExtension = {
  ".js": `${suffix}${format === "cjs" ? ".cjs" : ".js"}`,
};
const watch = argv.w || argv.watch || false;
const entryPoints = [
  "./src/index.ts",
  ...glob.sync("./src/components/*/index.ts"),
];

console.log("aaa", entryPoints);

const config = {
  bundle: false,
  bundle: true,
  entryPoints,
  format,
  keepNames: true,
  metafile: false,
  minify: argv.m || argv.minify || false,
  outdir: "dist",
  outExtension,
  platform: "browser",
  plugins: [
    resolvePlugin({
      destination: `${argv.d ? "./" : "./"}${argv.name || "Enlightenment"}${
        outExtension[".js"]
      }`,
      excludeFramework: !argv.d,
      extension: outExtension[".js"],
    }),
    stylePlugin(),
  ],
};

esbuild
  .build(config)
  .then(() => console.log(`Library created: ${config.outdir}`));
