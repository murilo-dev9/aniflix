const base = "https://api.jikan.moe/v4";

const ani_api = {
  getAnimeById: async (id) => {
    const response = await fetch(`${base}/anime/${id}`);
    const data = await response.json();
    return data;
  },
  getAnimeImage: async (id) => {
    const response = await fetch(`${base}/anime/${id}`);
    const resultado = await response.json();
    return resultado.data?.images?.jpg?.image_url;
  }

}

export default ani_api;