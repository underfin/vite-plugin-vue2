export default {
	props: {
		render: {}
	},
	render() {
		return <div class={'jsx'}> With .JSX extension works!
			{this.render}
		 </div>
	}
}
