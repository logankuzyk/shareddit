export const colors = (darkMode: boolean) => {
  return {
    borderColor: darkMode ? "#4d4d4d" : "#AAAAAA",
    color: darkMode ? "#AAAAAA" : "#001219",
    backgroundColor: darkMode ? "#001219" : "#FFFFFF",
    iconBackgroundColor: darkMode ? "#4d4d4d" : "#dbdbdb",
    iconTextColor: darkMode ? "#999999" : "#575757",
  };
};
