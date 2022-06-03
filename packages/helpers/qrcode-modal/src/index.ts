import { IQRCodeModalOptions } from "@walletconnect/types";

import * as nodeLib from "./node";
import * as browserLib from "./browser";

const isNode = () =>
  typeof process !== "undefined" &&
  typeof process.versions !== "undefined" &&
  typeof process.versions.node !== "undefined";

export type AlgorandQRCodeModalOptions = IQRCodeModalOptions & {
  addAlgorandMarkerToUri?: boolean;
};

const ALGORAND_QUERY_PARAM_NAME = "algorand";

function open(uri: string, cb: any, qrcodeModalOptions?: AlgorandQRCodeModalOptions) {
  const { addAlgorandMarkerToUri, ...vanillaOptions } = qrcodeModalOptions || {};

  if (addAlgorandMarkerToUri == null || addAlgorandMarkerToUri) {
    const urlObject = new URL(uri);
    if (!urlObject.searchParams.has(ALGORAND_QUERY_PARAM_NAME)) {
      urlObject.searchParams.set(ALGORAND_QUERY_PARAM_NAME, "true");
      uri = urlObject.toString();
    }
  }

  // eslint-disable-next-line no-console
  console.log(uri);
  if (isNode()) {
    nodeLib.open(uri);
  } else {
    browserLib.open(uri, cb, vanillaOptions);
  }
}

function close() {
  if (isNode()) {
    nodeLib.close();
  } else {
    browserLib.close();
  }
}

export default { open, close };
