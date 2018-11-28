import React, { Component } from 'react'
import TotalToday from './TotalToday'
import NewEntryButton from './NewEntryButton'

class RightColumn extends Component {
	render() {
		return (
			<div className="right-column">
				<TotalToday />
				<NewEntryButton
					class={this.props.buttonClass}
					onNewEntryClick={this.props.onNewEntryClick}/>
			</div>
		)
	}
}

export default RightColumn