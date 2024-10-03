import type { Municipality } from "../../types.ts";
import allMunicipalities from "./all-municipalities.ts";

export default function getMunicipality(id: string): Municipality | undefined {
  return allMunicipalities.find(municipality => municipality.id === id);
}
