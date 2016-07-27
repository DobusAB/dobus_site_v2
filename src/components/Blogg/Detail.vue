<template>
<div class="post-container" transition="expand"  v-bind:style="{background: data.custom_field.post_color}">
    <div class="col-xs-12 intro--wrapper flex flow-vertical margin-auto text-center align-middle align-center">
        <h2 class="text--tilted">{{data.title.rendered}}</h2>
        <div class="masked--image large" v-bind:class="{'nav--project_open': this.$root.global.projectOpen}" v-bind:style="{'background-image': 'url(' + data.custom_field.post_image + ')' }"></div>
    </div>
    <div class="col-xs-12 post--content">
       <div class="author--wrapper flow--horizontal flex">
        <div class="author--image"  v-bind:style="{'background-image': 'url(' + data[0].custom_field.author_image + ')' }"></div>
        <div class="author--info">
          <h5>{{{data[0].custom_field.author_title}}}Designer</h5>
          <h4>{{{data[0].custom_field.author_name}}}Albin Martinsson</h4>
        </div>
      </div>
      {{{data.content.rendered}}}
</template>

<script>
import Init from '../Partials/Init'
import Loading from '../Partials/Loading'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World',
      show: false,
      data: [],
      posts: [],
      body: document.getElementsByTagName('body')[0],
      yoast: {
        description: '',
        title: '',
        keywords: ''
      }
    }
  },
  components: {
    loading: Loading
  },
  methods: {
    getPost: function (transition) {
      this.$http.get(Init.globalUrl() + 'index.php/wp-json/wp/v2/posts/' + this.$route.params.id).then((response) => {
        this.data = response.data
        this.$root.global.loading = false
        this.show = true
      },
			(response) => {})
    }
  },
  route: {
    data: function () {
      this.getPost()
    },
    deactivate: function (transition) {
      this.$root.global.projectOpen = false
      this.body.className = ''
      transition.next(transition)
    }
  },
  ready: function () {
    this.$root.global.projectOpen = true
    this.body.classList.add('project-open')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
