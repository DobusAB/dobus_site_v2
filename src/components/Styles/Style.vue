<style lang="scss">

	@import 'Variables';
	@import 'Fonts';
	@import 'Classes';
	@import 'Animations';
	@import 'Menu';
	@import 'Home';
	@import 'Detail';
	@import 'Page';
	@import 'Project';
	@import 'About';
	@import 'Blogg';
	@import 'Work';
	@import 'Footer';
	@import 'Loading';
	@import 'Sally';

	body {
		margin:0;
		padding:0;
		font-family: $font ,sans-serif;
		background-color:#fefefe;
		overflow-x: hidden;
		-webkit-font-smoothing: antialiased;

		&.project-open {
			overflow:hidden;
		}
	}

</style>
