<template>
	<div class="page--intro flex align-left align-middle" v-if="show">
       <h1 class="text--tilted">Vi är din <mark>lokala digitalbyrå</mark> som <mark>hjälper</mark> ditt företag att få en i den <mark>digitala världen</mark></h1>
   </div>
</template>

<script>
// import Init from '../Partials/Init'
// import Loading from '../Partials/Loading'

export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    getTeamPage: function () {}
  },
  ready: function () {
    this.$root.global.loading = false
  }
}
</script>