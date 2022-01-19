const localStorage = store => next => action => {
  const result = next(action);

  // #TOIMPROVE: Melhorar middleware de localStorage
  if (action.payload?.localStorageKey !== undefined) {
    window.localStorage.setItem(
      action.payload.localStorageKey,
      JSON.stringify(action.payload.localStorageValue)
    )
  }

  return result;
}

export default localStorage;