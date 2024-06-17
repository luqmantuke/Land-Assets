export const fetchEstates = async () => {
    const requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    const response = await fetch("https://land.haddypro.online/api/fetch_estates/", requestOptions);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };
  