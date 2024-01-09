import axios from "axios";

const baseURL = "https://erpsystem.pildextech.cf/api/v1";

export const postData = async (url, data) => {
  await axios
    .post(`${baseURL}${url}`, data)
    .then((res) => {
      console.log(res);
      return res
    })
    .catch((e) => {
      console.log(e);
    });
};
