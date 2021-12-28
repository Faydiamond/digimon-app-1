
import { ref } from 'vue'
import axios from 'axios'

const searchDigimon = () =>{
    const digimon = ref (null)
    const resDigimon = ref([])
    const flagDigimon = ref(false)

    const searchDigimon = async ()=>{
        //console.log('Here');
        try {
            const {data} = await axios.get(`https://digimon-api.herokuapp.com/api/digimon/name/${digimon.value}`)
            resDigimon.value = data
            flagDigimon.value = true
            console.log(data);
            console.log('rESDIGIMON', resDigimon.value);
        } catch (e) {
            console.log('Se presento un error en la peticion',e);
              flagDigimon.value = false
        }            
        //console.log(resApi);
    }

    return{
        digimon,
        searchDigimon,
        flagDigimon,
        resDigimon
    }
}


export default searchDigimon