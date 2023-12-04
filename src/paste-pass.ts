import keychain from "keychain";
import { Clipboard } from "@raycast/api";

const service = "your service";
const account = "your service";

const Command = async () => {
  await new Promise((resolve) =>
    keychain.getPassword({ account, service }, async (error, pass) => {
      if (error) {
        console.error("Error retrieving secret:", error);
      }

      await Clipboard.paste(pass);
      resolve("");
    }),
  );
};

export default Command;
