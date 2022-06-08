import "mocha";
import { expect } from "chai";

import { transformUri } from "../src/transform";

// NOTE: the values in this map are not the only acceptable transformation of the URI, since the
// "algorand" marker can appear in any order with the other query params. Our implementation always
// adds the parameter at the end, so this test is good enough to verify that.
const cases: Map<string, string> = new Map([
    [
        // WC URI with no "algorand" marker
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?bridge=https%3A%2F%2F9.bridge.walletconnect.org&key=b0576e0880e17f8400bfff92d4caaf2158cccc0f493dcf455ba76d448c9b5655",
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?bridge=https%3A%2F%2F9.bridge.walletconnect.org&key=b0576e0880e17f8400bfff92d4caaf2158cccc0f493dcf455ba76d448c9b5655&algorand=true",
    ],
    [
        // WC URI with an "algorand" marker already at the end
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?bridge=https%3A%2F%2F9.bridge.walletconnect.org&key=b0576e0880e17f8400bfff92d4caaf2158cccc0f493dcf455ba76d448c9b5655&algorand=true",
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?bridge=https%3A%2F%2F9.bridge.walletconnect.org&key=b0576e0880e17f8400bfff92d4caaf2158cccc0f493dcf455ba76d448c9b5655&algorand=true",
    ],
    [
        // WC URI with an "algorand" marker already, not at the end
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?bridge=https%3A%2F%2F9.bridge.walletconnect.org&algorand=true&key=b0576e0880e17f8400bfff92d4caaf2158cccc0f493dcf455ba76d448c9b5655",
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?bridge=https%3A%2F%2F9.bridge.walletconnect.org&algorand=true&key=b0576e0880e17f8400bfff92d4caaf2158cccc0f493dcf455ba76d448c9b5655",
    ],
    [
        // not a valid WC URI, since there are no query params, but let's make sure we still produce a valid URI
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1",
        "wc:4015f93f-b88d-48fc-8bfe-8b063cc325b6@1?algorand=true",
    ],
]);

describe("transformUri", () => {
  it("adds marker by default", () => {
    for (const [input, expected] of cases) {
        const actual = transformUri(input);
        expect(actual).to.equal(expected);
    }
  });

  it("adds marker when enabled", () => {
    for (const [input, expected] of cases) {
        const actual = transformUri(input, true);
        expect(actual).to.equal(expected);
    }
  });

  it("does not add marker when disabled", () => {
    for (const [input] of cases) {
        const actual = transformUri(input, false);
        expect(actual).to.equal(input);
    }
  });
});
