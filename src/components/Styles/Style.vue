<style lang="scss">

	$device-sm: 30em;
	$device-md: 40em;
	$device-lg: 72em;
	$column-gutter: 1.4rem;

	$margin--small: 2.5em;
	$margin--medium: 5em;
	$margin--large: 10em;

	$dobus--primary: #FFC100;
	$dobus--black: #222222;


	@mixin scrollbars($size, $foreground-color, $background-color: mix($foreground-color, white, 50%)) {
	  ::-webkit-scrollbar {
	      width:  $size;
	      height: $size;
	  }

	  ::-webkit-scrollbar-thumb {
	      background: $foreground-color;
	      visibility: hidden;
	  }

	  ::-webkit-scrollbar-track {
	      background: $background-color;
	      visibility: hidden;
	  }

	  // For Internet Explorer
	  body {
	    scrollbar-face-color: $foreground-color;
	    scrollbar-track-color: $background-color;
	  }
	}

@include scrollbars(0em, slategray);

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
		font-family: "brandon-grotesque",sans-serif;
		background-color:#fefefe;
		-webkit-font-smoothing: antialiased;
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: left;
	}

	.text-center {
		text-align: center;
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

	.footer {
		padding:$margin--small $margin--small/1.5;
		color:#fff;
		background-color:$dobus--black;

		@include desktop {
			padding: $margin--medium;
		}
		h1 {
			font-size:2.25em;
			margin-top:0em;
			@include desktop {
				font-size:3.25em;
			}
		}

		p {
			font-size:1.2em;
			opacity: 0.5;
			margin:0.5em 0em 0.5em 0em; 
			font-weight:500;
			transition:opacity 0.2s;
			&:hover {
				opacity: 1;
			}
			a {
				text-decoration: none;
				color:#fff;
			}
		}
	}

	.landing--container {
		height:100vh;
		background-color:$dobus--primary;
		color:#fff;
		padding:0em $margin--small/2;
		@include desktop {
			padding:0em $margin--medium;
		}
		@include tablet {
			padding:0em $margin--small;
		}

		.landing--intro {
			height:100vh;
			@include desktop {
				height:100vh;
				align-items:center;
			}
			h1 {
				font-size:1.5em;
				@include desktop {
					font-size:3.25em;
					line-height: 1.1;
				}
				@include tablet {
					font-size:2.8em;
				}
			}
		}
		.landing--carousel {
			height:100%;
			height:30vh;
			position:absolute;
			bottom:0;
			left:0;

			@include desktop {
				position:flex;
				bottom:auto;
				left:auto;
			}
			.carousel--item {
				width:100%;
				padding:0em;
				flex-direction:row;
				//transform: perspective( 900px ) rotateY( -10deg );
				@include desktop {
					padding:$margin--medium;
				}


				.item--right {
				    display: flex;
				    justify-content: center;
				    flex-direction: column;
					span {
						font-size:1em;
						font-weight:500;
						opacity:0.2;
						color:#000;
						@include desktop {
							font-size:1.5em;
						}
						@include tablet {
							font-size:1.5em;
						}
					}
					h2 {
						margin-top:0.2em;
						font-size:1.25em;
						@include desktop {
							font-size:2em;
						}
						@include tablet {
							font-size:2em;
						}
					}
				}

				.item--shadow {
					height:10px;
					width:80%;
					@include desktop {
						width:70%;
						height:20px;
					}
					@include tablet {
						width:60%;
						height:12.5px;
					}
					margin:0 auto;
					opacity:0.2;
					background-color:#000;
					border-radius: 70%;
					z-index:1;
					margin-top:$margin--small/1.5;
					margin-bottom:$margin--small/1.5;
					animation: scale 1.75s infinite;
					animation-direction: alternate;
				}
				.item--left {

					.item--image {
						height:110px;

						@include desktop {
							height:425px;
						}
						@include tablet {
							height:210px;
						}
						width:100%;
						z-index:2;
						background-size:contain;
						background-position:center;
						background-repeat:no-repeat;
						animation: hover 1.75s infinite;
						animation-direction: alternate;

					}

					@keyframes hover {
					  0% {
					    transform: translateY(0px);
					  }
					  100% {
					    transform: translateY(20px);
					  }
					}

					@keyframes scale {
					  0% {
					    transform: scale(0.9);
					  }
					  100% {
					    transform: scale(1);
					  }
					}
				}
			}
			@include desktop {
				height:100vh;
			}
		}
	}


	.bg {
		//border:2px solid black;
	}


	.page--intro {
		background-color:$dobus--primary;
		padding:$margin--large $margin--small $margin--small $margin--small;
		text-align: left;

		@include desktop {
			padding:$margin--large $margin--large;
			h1 {
				font-size:3.5em;
				width:70%;
				margin-bottom:0em;
			}
			p {
				font-size:1.3em;
				width:80%;
			}
		}

		h1 {
			font-size:2em;
		}

		p {
			font-size:1.1em;
		}
	}

	.section--service {

		background-color: #fbfbfb; 

		&:nth-child(odd) {
			background-color:#fff;
		}

		.section--service--header {
			padding:$margin--small;

			h1 {
				font-size:2em;
			}

			p {
				font-size:1.1em;
			}

			@include desktop {
				padding:$margin--medium $margin--large;
				p {
					max-width:50%
				}
			}
		}

		.section--service--content {
			    overflow:hidden;
			    margin:0em $margin--small $margin--small $margin--small;
				border-radius:0.5em;
				overflow:hidden;

				@include desktop {
					margin:0em $margin--medium $margin--medium $margin--medium;
				}
			
			.section--service--project {
				min-width: 80%;
				height:25vh;
				background-size: 20%;
				background-position: center;
				background-repeat: no-repeat;
				position:relative;
				overflow:hidden;
			
				@include desktop {
					min-width: 40%;
					height:60vh;
				}

				.section--service--feature--image {
					position:absolute;
					height:100%;
					background-position:center;
					background-size:20em;
					background-repeat:no-repeat;
					width:100%;
					top:0;
					transition:all 1s;
					left:0;
					opacity: 0;
				}

				img {
					  display: block;
					  max-width:15em;
					  max-height:10em;
					  width: auto;
					  height: auto;
					  z-index:1;
				}

				@include desktop {
					&:hover {
						cursor:pointer;
						.section--service--feature--image {
							transform:scale(1.25);
							opacity: .2;
						}
					}
				}
			}
		}
	}

	.project-container {
		max-height:100vh;
		background-color:lightgray;
		position:fixed;
		width:100%;
		z-index:2;
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
			color:#fff;
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
