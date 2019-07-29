export const getArtists = async () => {
  const url = "http://localhost:3002/api/v1/artists";
  try{
    const response = await fetch(url);
   return await response.json();
  } catch(error){
    throw new Error(error.message);
  }
}
