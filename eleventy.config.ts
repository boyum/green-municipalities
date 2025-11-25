// biome-ignore lint/suspicious/noExplicitAny: No eleventy types available
export default function (eleventyConfig: any) {
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: "src",
      passthroughFileCopy: true,
    },
  };
}
