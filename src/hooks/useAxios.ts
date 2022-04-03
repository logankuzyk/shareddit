import axios from "axios";
import { useRef } from "react";

export const useAxios = () => {
  const { current: instance } = useRef(axios.create());

  instance.defaults.baseURL = "https://www.reddit.com";

  return instance;
};
