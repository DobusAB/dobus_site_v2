<style lang="scss">
	/* always present */
	.expand-transition {
	  transition: all .3s ease;
	  height: 500px;
	  padding: 10px;
	  background-color: tomato;
	  overflow: hidden;
	}

	/* .expand-enter defines the starting state for entering */
	/* .expand-leave defines the ending state for leaving */
	.expand-enter, .expand-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}

	.test-transition {
	  transition: all .3s ease;
	  height: 500px;
	  padding: 10px;
	  background-color: #fff;
	  overflow: hidden;
	}

	/* .expand-enter defines the starting state for entering */
	/* .expand-leave defines the ending state for leaving */
	.test-enter, .test-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
</style>
