export const fetchPlots = async () => {
    const requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    const response = await fetch("https://land.haddypro.online/api/fetch_plots/", requestOptions);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  


  export const fetchUserPlots = async (userId) => {
    const formdata = new FormData();
    formdata.append("user_id", userId);
  
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
  
    try {
      const response = await fetch("https://land.haddypro.online/api/fetch_user_plots/", requestOptions);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error("Error fetching user plots:", error);
      throw error;
    }
  };