// @ts-check
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/**/*.css");

  return {
    dir: {
      input: "src",
      passthroughFileCopy: true,
    },
  };
}
