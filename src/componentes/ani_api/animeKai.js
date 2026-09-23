
import axios from "axios"

const base = "https://api.consumet.org/anime/animekai"

const animeKai = (id) => {
    const assistir = `${base}/watch/${id}`
    const data = async () => {
        try{
        const {data} = await axios.get(assistir,{params:{server:"vidstreaming", dub:true}}) 
        return data
    }catch (erro) {
        throw new Error(erro.message)
    }
}

console.log(data)
};



export default animeKai