import sizes from "@atomico/rollup-plugin-sizes";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import path from "path";

const packageJson = require("./package.json");

console.log(path.join(__dirname, "dist/es/styles.css"));

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        name: "styles.css",
        // extract: true,
        extract: path.join("styles.css"),
      }),
      autoExternal({
        packagePath: "./package.json",
      }),
      sourcemaps(),
      sizes(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            paths: {
              "@tiptap/*": ["packages/*/src"],
            },
          },
          include: [],
        },
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: `./dist/es/index.d.ts`,
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  // {
  //   input: `./temp/styles.css`,
  //   output: [{ file: "dist/es/styles.css", format: "css" }],
  //   plugins: [postcss()],
  //   external: [/\.scss$/],
  // },
];
