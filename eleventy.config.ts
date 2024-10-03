import type { UserConfig } from "@11ty/eleventy";


export default function (eleventyConfig: UserConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: "src",
      passthroughFileCopy: true,
    },
  };
}
