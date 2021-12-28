import { ref }  from 'vue'
import axios from 'axios'

const useDigimones = ()=>{
    const digimones = ref ([])
    const digimon   = ref (null)

    const getDigimones = async ()=>{
        const {data}   = await axios.get('https://digimon-api.herokuapp.com/api/digimon')
        console.log(data);
        digimones.value = data
    }

    getDigimones()
    
    return{
      digimones,
      digimon
    }


}

export default useDigimones