import axios from "axios";

const API_URL = "/api/stores";
//create store
const createStore = async (storeData) => {
  const response = await axios.post(API_URL, storeData);
  return response.data;
};

//get all stores
const getStores = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const storeService = {
  createStore,
  getStores,
};

export default storeService;
