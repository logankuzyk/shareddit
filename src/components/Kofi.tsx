import React from "react";

export const Kofi: React.FC = () => {
  const { kofiwidget2 } = require("../kofiWidget");
  kofiwidget2.init("Donate", "#0a9396", "N4N31JDNX");

  return (
    <div dangerouslySetInnerHTML={{ __html: kofiwidget2.getHTML() }}></div>
  );
};
