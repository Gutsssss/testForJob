import axios from "axios";

  const getInstace = async (url,token) => {
    return axios.create({
        baseURL: url,
        timeout: 10000,
        headers: {'Authorization': token,"Access-Control-Allow-Origin": "*"}
      });
  }
  export default  getInstace