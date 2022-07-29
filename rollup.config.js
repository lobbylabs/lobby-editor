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
import postcss from "postcss";
import autoprefixer from "autoprefixer";

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
      scss({
        processor: (css) =>
          postcss([autoprefixer])
            .process(css)
            .then((result) => result.css),
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
    external: [/\.scss$/],
  },
];
