import axios from "axios";

class AuthService {
  login(email: string, password: string) {
    const data = { email, password };
    return axios({
      method: "post",
      url: `http://localhost:3001/user/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data,
    }).then((response) => {
      if (response.data.token) {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }
}

export default new AuthService();