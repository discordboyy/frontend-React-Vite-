import axios from "axios";

export async function getExchangeRate(from, to) {
  const response = await axios.get(`https://api.frankfurter.dev/v1/latest?from=${from}&to=${to}`);
  const data = response.data;
  return {
    base: data.base,
    date: data.date,
    rate: data.rates[to]
  };
}
