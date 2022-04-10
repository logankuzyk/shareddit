export const svgToBase64 = () => {
  const imgNode = document.getElementById("shareddit-svg");
  const canvasNode = document.getElementById("shareddit-canvas");
  if (imgNode !== null && canvasNode !== null) {
    //@ts-ignore
    const ctx = canvasNode.getContext("2d");
    ctx.drawImage(imgNode, 0, 0);
    //@ts-ignore
    return canvasNode.toDataURL("image/png");
  } else {
    alert("canvas is null");
  }
};
