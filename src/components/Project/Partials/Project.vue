<template>
	<div class="service--section flex flow-vertical" v-bind:style="{background: item.custom_fields.project_color }"  v-for="item in project">
    <div class="service--header row flex text-left">
          <div class="col-xs-12 service--text">
            <h1>{{item.post_title}}</h1>
            {{{item.post_content}}}
          </div>
    </div>
    <div class="service--content row">
      <div class="service--project flex flow-vertical align-middle align-center full" v-for="sub in item.sub_pages">
        <div class="project--image" v-bind:style="{'background-image': 'url(' + sub.custom_fields.project_featured_image + ')' }">
        </div>
        <div class="project--shadow"></div>
        <button v-link="{ name: 'project_by_name', params: { name: sub.post_name }}" class="primary--button">
          Spana in projekt
          <span>
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg width="18px" height="38px" viewBox="0 0 18 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <rect id="path-1" x="0" y="0" width="49" height="45"></rect>
                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Landing" transform="translate(-736.000000, -58.000000)">
                        <g id="Finger" transform="translate(720.000000, 51.000000)">
                            <mask id="mask-2" fill="white">
                                <use xlink:href="#path-1"></use>
                            </mask>
                            <g id="Mask"></g>
                            <g mask="url(#mask-2)">
                                <g transform="translate(16.000000, 7.000000)">
                                    <rect id="Rectangle-14" fill="#FFC100" x="0" y="0" width="18" height="46" rx="9"></rect>
                                    <path d="M15.2307692,10.4522766 C15.2307692,7.00409713 12.4411588,4.18181818 9,4.18181818 C5.56584324,4.18181818 2.76923077,6.98919806 2.76923077,10.4522766 L2.76923077,13.9393939 C2.76923077,13.9393939 4.31286071,16.0034406 9,16.0034406 C13.6871393,16.0034406 15.2307692,13.9393939 15.2307692,13.9393939 L15.2307692,10.4522766 Z" id="Combined-Shape" fill-opacity="0.114781476" fill="#000000"></path>
                                    <rect id="Rectangle-15" fill-opacity="0.0771059783" fill="#000000" x="2.76923077" y="27.8787879" width="12.4615385" height="1.39393939" rx="0.696969697"></rect>
                                    <rect id="Rectangle-15-Copy" fill-opacity="0.0771059783" fill="#000000" x="5.53846154" y="30.6666667" width="8.30769231" height="1.39393939" rx="0.696969697"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </span>
        </button>
      </div>
    </div>
    <svg width="156px" height="55px" class="section--overlap" viewBox="642 851 156 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <path d="M643,851 L648.00008,851 C656.836548,851 666.412122,857.750953 669.945053,865.850118 C669.945053,865.850118 680.275311,905.609375 717.99992,905.609375 C755.724529,905.609375 766.063401,865.8321 766.063401,865.8321 C769.34205,857.640558 779.16817,851 787.99976,851 L797.49984,851 L643,851 L643,851 Z" id="Combined-Shape" stroke="none" fill='{{item.custom_fields.project_color}}' fill-rule="evenodd"></path>
    </svg>
	</div>
</template>
<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  props: {
    project: []
  },
  ready: function () {
  }
}
</script>