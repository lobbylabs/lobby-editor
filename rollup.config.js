import sizes from "@atomico/rollup-plugin-sizes";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import autoExternal from "rollup-plugin-auto-external";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

const basePlugins = [sourcemaps(), resolve(), commonjs(), sizes()];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        format: "cjs",
        sourcemap: true,
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
      {
        format: "es",
        sourcemap: true,
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
    ],
    plugins: [
      autoExternal({
        packagePath: "./package.json",
      }),
      ...basePlugins,
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
    input: `./dist/index.d.ts`,
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
