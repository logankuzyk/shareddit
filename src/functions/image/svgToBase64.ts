export const svgToBase64 = () => {
  const imgNode = document.getElementById("shareddit-svg") as CanvasImageSource;
  const canvasNode = document.getElementById(
    "shareddit-canvas"
  ) as HTMLCanvasElement;
  if (imgNode !== null && canvasNode !== null) {
    const ctx = canvasNode.getContext("2d");
    ctx?.drawImage(imgNode, 0, 0);
    return canvasNode.toDataURL("image/png");
  } else {
    alert("canvas is null");
  }
};
