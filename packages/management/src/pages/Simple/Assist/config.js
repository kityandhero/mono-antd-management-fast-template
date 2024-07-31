export function parseUrlParametersForSetState({ urlParams }) {
  const { id } = urlParams;

  return { simpleId: id };
}

// eslint-disable-next-line no-unused-vars
export function checkNeedUpdateAssist(
  currentState,
  preProperties,
  preState,
  // eslint-disable-next-line no-unused-vars
  snapshot,
) {
  const { simpleId } = currentState;

  const { simpleId: simpleIdPre } = preState;

  return simpleIdPre !== simpleId;
}
