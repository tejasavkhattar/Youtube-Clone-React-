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

	render(){
		 return( 
		 	<div>
		 		<input 
		 			value={this.state.term}
		 			onChange={(event) => this.setState({term: event.target.value})}
		 		/>
		 	</div>
		);	
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