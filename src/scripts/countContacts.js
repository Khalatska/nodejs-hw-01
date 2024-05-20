import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

const countContacts = async () => {
  try {
    const fileContent = await fs.readFile(PATH_DB, "utf8");
    const data = JSON.parse(fileContent);

    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }
    const numberOfContacts = data.length;
    console.log(`The number of contacts is: ${numberOfContacts}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      return 0;
    } else {
      throw err;
    }
  }
};

console.log(await countContacts());
