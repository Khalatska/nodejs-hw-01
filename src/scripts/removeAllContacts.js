import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), "utf8");
    console.log("All contacts have been removed.");
  } catch (err) {
    console.error("Error removing contacts:", err);
  }
};

await removeAllContacts();
