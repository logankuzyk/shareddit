export const parseDate = (date: number, absolute?: boolean) => {
  const msPerDay = 86400000;
  const msPerHour = 3600000;
  const msPerMinute = 60000;
  // reddit uses seconds
  const epoch = date * 1000;
  const delta = Date.now() - epoch;

  if (absolute) {
    return new Date(epoch).toDateString();
  }
  if (delta >= msPerDay) {
    const num = Math.floor(delta / msPerDay);
    return num !== 1 ? `${num} days ago` : `${num} day ago`;
  } else if (delta >= msPerHour) {
    const num = Math.floor(delta / msPerHour);
    return num !== 1 ? `${num} hours ago` : `${num} hour ago`;
  } else if (delta >= msPerMinute) {
    const num = Math.floor(delta / msPerMinute);
    return num !== 1 ? `${num} minutes ago` : `${num} minute ago`;
  } else {
    return "now";
  }
};
