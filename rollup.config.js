import sizes from "@atomico/rollup-plugin-sizes";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
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
];
