import municipalities from "./all-municipalities.js";

// Run a fetch request towards each municipality's URL
// to verify that the URL is valid and the municipality
// is reachable.
const testMunicipalities = async () => {
  const results: {
    name: string;
    status: "success" | "error";
    message: string;
  }[] = await Promise.all(
    municipalities.map(async municipality => {
      try {
        const response = await fetch(municipality.url);
        if (response.status === 200 && !response.redirected) {
          return {
            name: municipality.name,
            status: "success",
            message: response.status.toString(),
          };
        }

        if (response.status === 200 && response.redirected) {
          return {
            name: municipality.name,
            status: "error",
            message: `Redirected to ${response.url}`,
          };
        }

        return {
          name: municipality.name,
          status: "error",
          message: response.status.toString(),
        };
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      } catch (error: any) {
        return {
          name: municipality.name,
          status: "error",
          message: error.message || error,
        };
      }
    }),
  );

  return results;
};

const main = async () => {
  // Failing municipalities
  // biome-ignore lint/complexity/noForEach: It's cleaner to use forEach here
  (await testMunicipalities())
    .filter(municipality => municipality.status === "error")
    .sort((a, b) => a.message.localeCompare(b.message))
    .forEach(municipality => {
      console.warn(`${municipality.name}: ${municipality.message}`);
    });
};

await main();
