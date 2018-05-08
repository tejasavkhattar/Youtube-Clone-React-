import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYUbuGb-WiJ9nHVdA-GzQx4J2lKtFJ4JM';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});
// Create a new component . This component should produce some HTML.
//const is same as var but it cant be modified at later time.
const App = function(){
 	return( 
 		<div> 
 			<SearchBar />
 		</div>

 	);
 }


// Take this component's generated HTML and put it on the page( in the DOM )

ReactDOM.render(<App />, document.querySelector('.container')); 					