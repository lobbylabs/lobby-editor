import sizes from "@atomico/rollup-plugin-sizes";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import path from "path";
import autoExternal from "rollup-plugin-auto-external";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

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
];
