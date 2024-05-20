import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf8");
    let contacts = JSON.parse(data);

    const updatedContacts = contacts.filter(() => Math.random() >= 0.5);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      "utf8"
    );
    console.log("The contacts have been updated.");
  } catch (err) {
    console.error(err);
  }
};

await thanos();
