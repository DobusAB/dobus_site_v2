<style lang="scss">
	/* always present */


	$device-sm: 30em;
	$device-md: 50em;
	$device-lg: 72em;

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


	.gradient {
		position:fixed;
		right:0;
		top:0;
		height:75px;
		width:125px;
		background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,255,255,1)); /*Standard*/
		pointer-events:none;

		@include desktop {
			visibility: hidden;
		}
	}

	.main-navigation {
		position:fixed;
		width:100%;
		//background-color: red;
		z-index:10;
		overflow-x:scroll;

		.main-navigation--inner {
			display:inline-flex;
			align-items: center;
			height:75px;
			min-width:auto;

			@include desktop {
				min-width:100%;
			}
		}

		.navigation--logo {
			background-color:blue;
			border-radius:0.2em;
			height:40px;
			width:60px;
			margin-left:2em;
		}

		.navigation--links {
			
			display:inline-flex;
			white-space: nowrap;

			@include desktop {
				justify-content: flex-end;
    			width: 100%;
			}
			
			a {
				display:inline;
				text-decoration: none;
				font-size:1.2em;
				color:#000;
				margin-right:2em;

				&:nth-child(1){
					margin-left:2em;
				}
 			}
	}
}


</style>
