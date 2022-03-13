import axios from "axios";
import { useRef } from "react";

export const useAxios = () => {
  const { current: instance } = useRef(axios.create());

  return instance;
};
