import React, { Component } from 'react'
import FoodEntry from './FoodEntry'
import myTools from '../../js/my-tools'

class LeftColumn extends Component {
	render() {
		const foods = myTools.getAllFoods()
		const foodElements = foods.map((item) => {
			return (
				<FoodEntry
					key={item.id}
					name={item.name}
					carbs={item.carbs}
					protein={item.protein}
					fats={item.fats}
					kcal={item.kcal}
					cabrs={item.carbs}
					quantity={item.quantity}
					measurement={item.measurement} />
			)

		})
		return (
			<div className="left-column">
				{foodElements}
			</div>
		)
	}
}

export default LeftColumn