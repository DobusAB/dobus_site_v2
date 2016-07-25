<template>
	<div class="nav--primary row align-middle" v-bind:class="{'nav--project_open': this.$root.global.projectOpen}">
	  	 <div class="nav--logo col-xs-12 col-md-2" v-link="{ name: 'start' }">
			<svg width="119px" height="31px" viewBox="0 0 119 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-weight="700" font-family="BrandonGrotesque-BlackItalic, Brandon Grotesque" letter-spacing="1.99999976" font-size="36" font-style="italic">
			        <g id="Desktop-HD-Copy-2" transform="translate(-104.000000, -57.000000)" fill="#FFFFFF">
			            <text id="DOBUS" transform="translate(164.000000, 73.000000) rotate(-2.000000) translate(-164.000000, -73.000000) ">
			                <tspan x="102" y="85">DOBUS</tspan>
			            </text>
			        </g>
			    </g>
			</svg>
	  	 </div>
	  	 <div class="nav--links col-xs-12 col-md-10 flow--horizontal">
	  	  <div class="nav--links--inner">
		      <a v-link="{ name: 'project', activeClass: 'nav--active' }" class="flex align-middle">
		      	<mark>Vad vi gör</mark>
		      </a>
		      <a v-link="{ name: 'about', activeClass: 'nav--active' }" class="flex align-middle">
		      	<mark>Kontakta oss</mark>
		      </a>
		      <a v-link="{ name: 'work', activeClass: 'nav--active' }" class="flex align-middle">
		      	<mark>Jobba här</mark>
		      </a>
		    </div>
	     </div>
	  </div>
	  <div v-link="{path: '/projects'}" class="nav--back" v-bind:class="{'nav--project_open': this.$root.global.projectOpen}">
			<?xml version="1.0" encoding="UTF-8" standalone="no"?>
			<svg width="20px" height="20px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			    <defs></defs>
			    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
			        <g id="Tjänster-&amp;-Projekt-Copy-6" transform="translate(-1261.000000, -3125.000000)" stroke="#fff" stroke-width="5.59999957">
			            <g id="Group-12" transform="translate(1279.000000, 3143.000000) scale(-1, 1) translate(-1279.000000, -3143.000000) translate(1264.000000, 3128.000000)">
			                <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id="Path-36"></path>
			                <polyline id="Path-37" points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline>
			            </g>
			        </g>
			    </g>
			</svg>
	  	 </div>
</template>

<!--   	  -->