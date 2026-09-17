const base = "https://pokeapi.co/api/v2";

const poke_api = { 
    getComputedStyle: async (id) => {
    const Response = await fetch(`${base}/pokemon/${id}`);
    const data = await Response.json();
    return data;
}
}

export default poke_api;