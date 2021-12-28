<template>
  <div class="home container">
     <!--<img alt="Vue logo" src="../assets/01.png">-->
    <div class="row">
      <div class="col-md-8">
        <img alt="digimon-v1" src="@/assets/01.png" class="img-fluid">
      </div>
      <div class="col">
        <h2> Digimon </h2> <hr>
        <p>
          es una franquicia de medios creado por Akiyoshi Hongo1​ que incluye productos como mascotas virtuales, videojuegos, películas, animes, mangas, juguetes y juegos de cartas coleccionables. La saga comenzó en 1997 a partir de una mascota virtual conocida como Digimon Virtual Pet, basado en la franquicia Tamagotchi.2​ Sin embargo, su popularidad aumentó con la emisión en 1999 de una serie de anime (Digimon Adventure) y el lanzamiento de un videojuego titulado Digimon World. La saga Digimon ocupó, en una encuesta realizada en la TV Asahi en 2006, el puesto número 54 de entre los 100 mejores animes de la historia.3
        </p>
      </div>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  setup(){
    const imagee = '../assets/01.png'

    return{
      imagee
    }
  }
}
</script>

<style scoped>
  h2{
    text-align: center;
    color: #42b983;
  }

  p{
    text-align: justify;
  }
</style>