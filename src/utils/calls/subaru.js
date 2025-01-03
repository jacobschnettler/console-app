// Home automation calls

import { API } from "../api";

export function fetchSubaruData() {
  return API.get("/subaru/get");
}
