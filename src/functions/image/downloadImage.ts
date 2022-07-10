export const downloadImage = (
  base64: string,
  subreddit: string,
  hash: string
) => {
  const click = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true,
  });
  const a = document.createElement("a");

  a.setAttribute("download", `shareddit-${subreddit}-${hash})}.png`);
  a.setAttribute("href", base64);
  a.setAttribute("target", "_blank");
  a.dispatchEvent(click);

  document.removeChild(a);
};
