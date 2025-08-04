import axios from "../api/axiosInstance";

export const initiatePayment = async (payload) => {
  const res = await axios.post("/paymob/pay", payload);
  return res.data.iframeUrl;
};
