import axios from "axios";

const baseURL = "https://erpsystem.pildextech.cf/api/v1";

export const postData = async (url, data) => {
  let result = {}
  await axios
    .post(`${baseURL}${url}`, data).then((res)=> {
      result = res;
    }).catch((e) => {
      result = e.response
    });
    return result
};
