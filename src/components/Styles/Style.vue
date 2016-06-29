<style lang="scss">
	/* always present */

	$device-sm: 30em;
	$device-md: 50em;
	$device-lg: 72em;
	$column-gutter: 1.4rem;

	@mixin tablet {
	  @media (min-width: #{$device-md}) and (max-width: #{$device-lg - 0.1em}) {
	    @content;
	  }
	}

	@mixin desktop {
	  @media (min-width: #{$device-lg}) {
	    @content;
	  }
	}

	body {
		margin:0;
		padding:0;
		font-family: sans-serif;
		//overflow:hidden;
	}

	.flex {
		display:flex;

		&.align-center {
			justify-content: center;
		}

		&.align-middle {
			align-items: center;
		}

		&.align-right {
			justify-content: flex-end;
		}

		&.align-left {
			justify-content: flex-start;
		}

		&.flow-vertical {
			flex-direction: column;
		}

		&.flow-horizontal {
			flex-direction: row;
		}

		&.full {
			flex:1;
		}
	}

	.section--service {

		.section--service--header {
			height:50vh;
			background-color:lightgray;
		}

		.section--service--content {
			min-height:50vh;

			.section--service--project {
				min-width: $device-sm;
			}
		}
	}

	.project-container {
		max-height:100vh;
		background-color:lightgray;
		position:fixed;
		width:100%;
		top:0;
		overflow:scroll;
		right:0;
		transform:translateX(100%);
		transition:all 0.6s cubic-bezier(0.86, 0, 0.07, 1);

		.project-inner {
			height:2000px;
			display:flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

	}


	.expand-transition {
	 	transform:translateX(5%);
	}

	.expand-leave {
		transform:translateX(100%);
	}

	/* .expand-enter defines the starting state for entering */
	/* .expand-leave defines the ending state for leaving */
	.expand-enter {
		transform:translateX(100%);
	}
</style>
