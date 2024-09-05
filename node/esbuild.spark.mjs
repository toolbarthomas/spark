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
const entryPoints = [...glob.sync("./src/spark/**/*.ts")];

const config = {
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
      destination: argv.cdn
        ? argv.cdn
        : `${argv.name || "Enlightenment"}${outExtension[".js"]}`,
      excludeFramework: true,
      extension: outExtension[".js"],
    }),
    stylePlugin(),
  ],
};

if (watch) {
  esbuild.context(config).then((context) => {
    context.watch();
  });
} else {
  esbuild
    .build(config)
    .then(() => console.log(`Library created: ${config.outdir}`));
}
