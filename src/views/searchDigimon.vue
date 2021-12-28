<template>
  <div class="container">
      <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
              <input type="text" class="form-control" placeholder="Digimon" v-model="digimon" @keyup="searchDigimon">
              
          </div>
          <div class="col-md-4"></div>
      </div>
      <div class="row mt-4" v-if="flagDigimon">
          <div class="col-md-2"></div>
          <div class="col-md-8">
              <h1> {{ resDigimon[0].name }} </h1>
              <img :src="resDigimon[0].img" alt="">
              <p> {{ resDigimon[0].level }} </p>
          </div>
          <div class="col-md-2"></div>
      </div>
      <div class="row mt-4" v-else>
          <div class="col-md-2"></div>
          <div class="col-md-8">
              <h1> No Existe El Digimon </h1>
          </div>
          <div class="col-md-2"></div>
      </div>
      
  </div>
</template>

<script>
import searchDigimonnn from '@/composables/useSEarchDigimon'
export default {
    setup(){
        const { digimon,searchDigimon,flagDigimon,resDigimon } = searchDigimonnn()
        return { digimon,searchDigimon,flagDigimon,resDigimon }
    }
}
</script>

<style>

</style>