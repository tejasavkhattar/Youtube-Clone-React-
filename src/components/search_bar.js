import React from 'react'
/*
const SearchBar = () => {
	return <input />;
};
*/
// Using arrow functions
class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = { term: ''};
	}
// controlled component : value is set by state the value changes when state changes. When set state is called the componentre renders.
	render(){
		 return(
		 	<div className="search-bar">
		 		<input
		 			value={this.state.term}
		 			onChange={(event) => this.onInputChange(event.target.value)}
		 		/>
		 	</div>
		);
	}

	onInputChange(term){
		this.setState({term: term});
		this.props.onSearch(term);
	}
}

/*
class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}
	render(){
		return(
			<div>
				<input onChange={this.onInputChange} />
				Value of the input: {this.state.term}
			</div>
		);

	}

	onInputChange(event){
		this.setState({ term : event.target.value});

	}
}
*/
export default SearchBar;
