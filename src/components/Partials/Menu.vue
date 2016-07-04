<template>
	<div class="nav--primary row align-middle">
	  <div class="nav--gradient"></div>
	  <div class="nav--inner">
	  	 <div class="nav--logo" v-link="{ name: 'start' }"></div>
	  	 <div class="nav--links">
		      <a v-link="{ name: 'project', activeClass: 'nav--active' }" class="flex align-middle">
		      	<span></span>
		      	Projekt
		      </a>
		      <a v-link="{ name: 'about', activeClass: 'nav--active' }" class="flex align-middle">
		      	<span></span>
		      	Vårt Team
		      </a>
		      <a v-link="{ name: 'process', activeClass: 'nav--active' }" class="flex align-middle">
		      	<span></span>
		      	Vår Process
		      </a>
		      <a v-link="{ name: 'work', activeClass: 'nav--active' }" class="flex align-middle">
		      	<span></span>
		      	Jobba här
		      </a>
	     </div>
	  </div>
	  
    </div>	
</template>

