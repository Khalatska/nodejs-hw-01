import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "node:fs/promises";

const generateContacts = async () => {
  return createFakeContact();
};

export const addOneContact = async () => {
  const newContact = await generateContacts();
  try {
    let existingData;
    try {
      const fileContent = await fs.readFile(PATH_DB, "utf8");
      existingData = JSON.parse(fileContent);
    } catch (err) {
      if (err.code === "ENOENT") {
        existingData = [];
      } else {
        throw err;
      }
    }
    if (!Array.isArray(existingData)) {
      existingData = [];
    }
    const updatedData = [...existingData, newContact];

    const updatedDataJson = JSON.stringify(updatedData);
    await fs.writeFile(PATH_DB, updatedDataJson, "utf8");
    console.log("The data was successfully added to the file.");
  } catch (err) {
    console.error("Error adding data to file:", err);
  }
};

await addOneContact();
