import { FleshedRedditSubmission } from "../../types";

export const storeParams = (query: string, params: FleshedRedditSubmission) => {
  const key = query;
  const data = JSON.stringify({ key, ...params });

  localStorage.setItem("shareddit-content", data);
};
