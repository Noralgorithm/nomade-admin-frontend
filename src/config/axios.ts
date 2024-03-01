import axios from "axios";
import { BACKEND_BASE_URL } from "./environment";
import { parse, stringify } from "qs";
import { kebabizeObj } from "@/utils/kebabize.util";

export const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  paramsSerializer: {
    encode: (params) => parse(params),
    serialize: (params) => stringify(kebabizeObj(params)),
  },
});
