<template>
	<div class="main-navigation row  align-middle">
	  <div class="main-navigation--inner">
	  	 <div class="navigation--logo" v-link="{ name: 'start' }"></div>
	  	 <div class="navigation--links">
	      <a v-link="{ name: 'project' }">Projekt</a>
	      <a v-link="{ name: 'about' }">Vårt Team</a>
	      <a v-link="{ name: 'process' }">Vår Process</a>
	      <a v-link="{ name: 'work' }">Jobba här</a>
	     </div>
	  </div>
	  <div class="gradient"></div>
    </div>	
</template>