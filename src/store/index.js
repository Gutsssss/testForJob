import { defineStore } from "pinia";
import getInstace from "../utils/axios";
import axios from "axios";


export const useListStore = defineStore("list", {
  state: () => {
    auth: {
        access_token: 0
        base_domain: 0 
    }
  },
  actions: {
    async getToken(token) {
      const  data  = axios.get("https://test.gnzs.ru/oauth/get-token.php", {
        headers: {
          "X-Client-Id": token,
        },
      });
      this.auth = data
      return data;
    },
    async createLead(data) {
        const response = getInstace(this.auth.base_domain,this.auth.access_token).post('/api/v4/leads',{
            data
        })
        return response
    }
  },
});
