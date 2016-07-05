<style lang="scss">
	/* always present */

	$device-sm: 30em;
	$device-md: 50em;
	$device-lg: 72em;

	$dobus--primary: #FFC100;
	$nav--height: 85px;

	@mixin box_shadow ($level) {

	    @if $level == 1 {
	        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	    } @else if $level == 2 {
	        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	    } @else if $level == 3 {
	        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	    } @else if $level == 4 {
	        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	    } @else if $level == 5 {
	        box-shadow: 0 0px 0px rgba(0,0,0,0.30), 0 0px 20px rgba(0,0,0,0.22);
	    }

	}

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

	.nav--primary {
		position:fixed;
		background-color: white;
		z-index:10;
		top: 0;
	    left: 0;
	    right: 0;
	    width: 90%;
		margin:0 auto;
		overflow-x:scroll;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		transition:left 0.2s;
		@include desktop {
		
		}

		&.nav--project_open {
			  left: 5%;
		}

		.nav--gradient {
			position:fixed;
			right:5%;
			z-index:99;
			top:0;
			height:$nav--height;
			width:125px;
			background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,255,255,1)); /*Standard*/
			pointer-events:none;
			border-bottom-right-radius: 8px;

			@include desktop {
				display:none;
			}
		}

		.nav--inner {
			display:inline-flex;
			align-items: center;
			min-width:auto;

			@include desktop {
				min-width:100%;
				//height:85px;
			}
		}

		.nav--logo {
			background-color:lightgray;
			border-radius:0.2em;
			height:40px;
			width:60px;
			margin-left:1.75em;

			@include desktop {
				margin-left:2em;
			}
		}

		.nav--links {
			
			display:inline-flex;
			white-space: nowrap;

			@include desktop {
				justify-content: flex-end;
    			width: 100%;
			}
			
			a {
				display:flex;
				height:$nav--height;
				text-decoration: none;
				font-size:1.2em;
				color:gray;
				position:relative;
				margin-right:1.5em;
				overflow:hidden;
				transition:padding-bottom 0.35s ;

				span {
					width:100%;
					height:0px;
					position:absolute;
					bottom:0px;
					transition:bottom 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					margin:0 auto;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
					background-color:$dobus--primary;
				}

				&.nav--active {
					color:#000;
					padding-bottom:0.75em;
					
					span {
						bottom:32.5px;
					}
				}

				@include desktop {
					margin-right:4em;
				}

				&:nth-child(1){
					margin-left:2em;
				}
 			}
	}
}


</style>
