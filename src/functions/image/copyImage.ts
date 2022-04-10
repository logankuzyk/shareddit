export const copyImage = async (base64: string) => {
  const blob = await fetch(base64).then((res) => res.blob());
  const type = "image/png";
  const data = [new ClipboardItem({ [type]: blob })];

  const input = document.getElementById("image-base64");

  if (input) {
    input.setAttribute("value", base64);
    const dest = document.getElementById("headless-interface");
    if (dest) {
      const a = document.createElement("a");
      a.setAttribute("id", "loaded");
      dest.appendChild(a);
    }
  }

  navigator.clipboard.write(data);
};
