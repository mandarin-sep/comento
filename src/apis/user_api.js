import axios from "axios";

export async function loginAPI(email, password) {
  try {
    const param = {
      email: email,
      password: password,
    };
    const res = await axios.post(
      "http://api.plogcareers.com/auth/login",
      param
    );

    return res.data.data;
  } catch (err) {
    return null;
  }
}
