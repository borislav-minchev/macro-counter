import React, { Component } from 'react'
import '../css/App.css'
import LeftColumn from './left-column/LeftColumn'
import RightColumn from './right-column/RightColumn'
import NewEntryWindow from './NewEntryWindow'

class App extends Component {

	constructor(props) {
    super(props)
    this.state = {
			isNewEntryWindowVisible: false,
			isNewEntryOpened: false
		}
		this.onNewEntryClick = this.onNewEntryClick.bind(this)
		this.onNewEntryWindowClose = this.onNewEntryWindowClose.bind(this)
  }

	onNewEntryClick() {
		debugger
		console.log('app.jsx onnewentry')
		this.setState({
			isNewEntryWindowVisible: !this.state.isNewEntryWindowVisible,
			isNewEntryOpened: !this.state.isNewEntryOpened
		})
	}

	onNewEntryWindowClose() {
		console.log('on new entry window close')
	}

  render() {
		let buttonClass
		if (this.state.isNewEntryOpened) {
			buttonClass = 'clicked'
		}
    return (
      <div className="App">
				<LeftColumn />
				<RightColumn onNewEntryClick={this.onNewEntryClick} buttonClass={buttonClass}/>
				{this.state.isNewEntryWindowVisible ? <NewEntryWindow onclick={this.onNewEntryWindowClose} /> : ''}
      </div>
    )
  }
}

export default App