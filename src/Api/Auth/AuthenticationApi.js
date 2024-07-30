import { SERVER_URL } from "../../utilities/constant/api/api_constant";
export const loginUser = async (email,password) => {

    const formdata = new FormData();

    formdata.append("email", email);
    formdata.append("password", password);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    const response = await fetch(`${SERVER_URL}/api/auth/login/`, requestOptions);

    return response.json();
  };

  export const registerUser = async (username,email,password,phone_number,first_name,last_name) => {

    const formdata = new FormData();

    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("phone_number", phone_number);
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    const response = await fetch(`${SERVER_URL}/api/auth/signup/`, requestOptions);
    console.log(`Response ${response}`)

    return response.json();
  };