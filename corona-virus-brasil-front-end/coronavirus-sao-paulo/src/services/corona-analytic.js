import axios from "axios";

export const getAllInformationsAboutSP = async () => {
  try {
    const { data } = await axios.get("https://api.coronaanalytic.com/brazil/35");
    const { cases, deaths, suspects, refuses } = data;

    return { cases, deaths, suspects, refuses };
  } catch (err) {
    console.log(err);
    return;
  }
}