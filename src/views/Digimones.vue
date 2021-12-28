<template>
  <div class="about container">

    <div class="row">
        <div class="col-md-4 mt-3" v-for="(digimon,index) in digimones " :key="index" >
            <div class="card" style="width: 18rem;">
              <img  class="card-img-top" alt="digimon.name"  :src="digimon.img"> 
              <div class="card-body">
                <h5 class="card-title"> {{ digimon.name }} </h5>
                <p class="card-text"> {{ digimon.level }} </p>
                <!--  <a href="#" class="btn btn-primary">Go somewhere</a>-->
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import useDigimones from '../composables/useDigimones'
export default {
  setup() {
      const {digimones,digimon}  = useDigimones()
      return { digimones,digimon }
  }
}
</script>

<style scoped>

</style>