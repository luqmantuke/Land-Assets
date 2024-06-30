export const loginUser = async (email,password) => {

    const formdata = new FormData();

    formdata.append("email", email);
    formdata.append("password", password);
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    const response = await fetch(`https://land.haddypro.online/api/auth/login/`, requestOptions);

    return response.json();
  };

  export const registerUser = async (email,password) => {

    const formdata = new FormData();

    formdata.append("username", "tegeka");
    formdata.append("email", "mtegeka@gmail.com");
    formdata.append("password", "@mtegeka");
    formdata.append("phone_number", "255787835830");
    formdata.append("first_name", "Tegeka");
    formdata.append("last_name", "m");
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    const response = await fetch(`https://land.haddypro.online/api/auth/signup/`, requestOptions);
    console.log(`Response ${response}`)

    return response.json();
  };