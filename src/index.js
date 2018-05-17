import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDYUbuGb-WiJ9nHVdA-GzQx4J2lKtFJ4JM';


// Create a new component . This component should produce some HTML.
//const is same as var but it cant be modified at later time. It is used to define constant
// function() = () =>
class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards')
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			 });
			//same as this.setState({videos: videos}); = this.setState({videos}) only when key and value pair are same
		});

	}
	render(){
		return(
	 		<div>
	 			<SearchBar onSearch={term => this.videoSearch(term)}  />
				<VideoDetail video3={this.state.selectedVideo} />
				<VideoList
					onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
					video = {this.state.videos} />

	 		</div>
	 	);
	}
}


// Take this component's generated HTML and put it on the page( in the DOM )
//<App /> used to create instance of App. it is a jsx tag
ReactDOM.render(<App />, document.querySelector('.container'));
