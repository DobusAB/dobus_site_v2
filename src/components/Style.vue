<style lang="scss">
	/* always present */

	body {
		margin:0;
		padding:0;
		overflow:hidden;
	}

	.main-container {
		height:100vh;
		background-color:white;
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
