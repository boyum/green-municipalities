import { $ } from "execa";

import Manifest from "./package.json" with { type: "json" };

await $`npx tsc node_modules/@11ty/eleventy/src/UserConfig.js
        --declaration
        --allowJs
        --emitDeclarationOnly
        --moduleResolution nodenext
        --module nodenext
        --target esnext`;

for (const pkg in Manifest.devDependencies) {
  if (pkg.startsWith("@11ty")) {
    const spec = import.meta.resolve(pkg).replace("file://", "");
    try {
      await $`npx tsc ${spec}
              --declaration
              --allowJs
              --emitDeclarationOnly
              --moduleResolution nodenext
              --module nodenext
              --target esnext`;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (e: any) {
      console.log(e.stdout);
    }
    console.log(`Wrote types for ${pkg}`);
  }
}
