import React, { Component } from 'react'

class NewEntryButton extends Component {
	render() {
		return (
			<div id="newEntryContainer">
				<div id="newEntryWindow"></div>
				<button
					id="btnNewEntry"
					className={this.props.class}
					onClick={this.props.onNewEntryClick}>
					New Entry
				</button>
			</div>

		)
	}
}

export default NewEntryButton