import React from "react";
import Selection from "./Selection";
import "./Navigation.css";

class Navigation extends React.Component {
	state = {
		genre: 'comedy'
	}

	onGenreChange = event => {
		this.setState( { genre: event.target.value } );
	}

	render() {
		return (
			<section className="navigation">
				<Selection genre={this.state.genre} onGenreChange={this.onGenreChange}/>
			</section>
		)
	}
}

export default Navigation;