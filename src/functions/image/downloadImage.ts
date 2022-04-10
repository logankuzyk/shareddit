export const downloadImage = (base64: string, sub: string, hash: string) => {
  const click = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true,
  });
  const a = document.createElement("a");

  a.setAttribute("download", `shareddit-${sub}-${hash})}.png`);
  a.setAttribute("href", base64);
  a.setAttribute("target", "_blank");
  a.dispatchEvent(click);

  document.removeChild(a);
};
