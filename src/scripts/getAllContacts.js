import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf8");
    console.log("The contents of the file", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

await getAllContacts();
