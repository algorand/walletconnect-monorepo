
const ALGORAND_QUERY_PARAM_NAME = "algorand";

export function transformUri(uri: string, addAlgorandMarkerToUri?: boolean): string {
  if (addAlgorandMarkerToUri == null || addAlgorandMarkerToUri) {
    const urlObject = new URL(uri);
    if (!urlObject.searchParams.has(ALGORAND_QUERY_PARAM_NAME)) {
      urlObject.searchParams.set(ALGORAND_QUERY_PARAM_NAME, "true");
      return urlObject.toString();
    }
  }
  return uri;
}
