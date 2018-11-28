import React, { Component } from 'react'

class FoodEntry extends Component {
	render() {
		return (
			<div
				className="food-entry"
				carbs={this.props.carbs}
				protein={this.props.protein}
				fats={this.props.fats}
				kcal={this.props.kcal}>
					<div className="food-name">{this.props.name}</div>
					<div className="food-quantity">{this.props.quantity}</div>
					<div className="food-measurement">{this.props.measurement}</div>
			</div>
		)
	}
}

export default FoodEntry