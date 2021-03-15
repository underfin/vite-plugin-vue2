const word: string = 'With .JSX extension works!'

export default {
	props: {
		render: {}
	},
	render() {
		return <div class={'jsx'}> {word} </div>
	}
}
