import { IQRCodeModalOptions } from "@walletconnect/types";

import * as nodeLib from "./node";
import * as browserLib from "./browser";
import { transformUri } from "./transform";

const isNode = () =>
  typeof process !== "undefined" &&
  typeof process.versions !== "undefined" &&
  typeof process.versions.node !== "undefined";

export type AlgorandQRCodeModalOptions = IQRCodeModalOptions & {
  addAlgorandMarkerToUri?: boolean;
};

function open(uri: string, cb: any, qrcodeModalOptions?: AlgorandQRCodeModalOptions) {
  const { addAlgorandMarkerToUri, ...vanillaOptions } = qrcodeModalOptions || {};

  uri = transformUri(uri, addAlgorandMarkerToUri);

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
