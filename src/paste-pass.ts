import keychain from "keychain";
import { Clipboard, getPreferenceValues } from "@raycast/api";

interface Preferences {
  account: string;
  service: string;
}

const Command = async () => {
  const { account, service } = getPreferenceValues<Preferences>();
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
