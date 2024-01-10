export const openNewWindow = (url: string) => {
  const newWin = window.open(url);

  if (!newWin || newWin.closed || typeof newWin.closed == "undefined") {
    alert("Your browser block the new tab");
  }
};
