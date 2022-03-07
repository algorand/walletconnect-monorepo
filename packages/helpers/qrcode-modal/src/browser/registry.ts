import { IAppRegistry, IAppEntry } from "@walletconnect/types";

const officialAlgorandWallet: IAppEntry = {
  // hex encoding of 32 random bytes
  id: "23138217b046ae8d9d07e62b3337fb288c4445f92f64be067809cd0a8f9454b9",
  name: "Pera Wallet",
  homepage: "https://perawallet.app",
  chains: [
    // need to change once a standard emerges, perhaps https://github.com/ChainAgnostic/CAIPs/pull/55
    "algorand",
  ],
  // randomly generated UUID
  image_id: "1765f9aa-f99e-414e-826b-6b570d480999",
  image_url: {
    sm: "https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",
    md: "https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",
    lg: "https://algorand-app.s3.amazonaws.com/app-icons/Pera-walletconnect-128.png",
  },
  app: {
    browser: "",
    ios: "https://apps.apple.com/us/app/algorand-wallet/id1459898525",
    android: "https://play.google.com/store/apps/details?id=com.algorand.android",
    mac: "",
    windows: "",
    linux: "",
  },
  mobile: {
    native: "algorand-wc:",
    universal: "",
  },
  desktop: {
    native: "",
    universal: "",
  },
  metadata: {
    shortName: "Pera Wallet",
    colors: {
      // "Pera Wallet yellow"
      primary: "rgb(255, 238, 85)",
      secondary: "",
    },
  },
};

export const registry: IAppRegistry = {
  [officialAlgorandWallet.id]: officialAlgorandWallet,
};
