import React, { Component } from 'react'

class TotalToday extends Component {
	render() {
		return (
			<table className="total-today">
				<tbody>
					<tr>
						<th />
						<th>Дневен лимит</th>
						<th>Моментен</th>
					</tr>
					<tr>
						<th>Калории</th>
						<th>2053</th>
						<th>1700</th>
					</tr>
					<tr>
						<th>Протеин</th>
						<th>179</th>
						<th>154</th>
					</tr>
					<tr>
						<th>Въглехидрат</th>
						<th>188</th>
						<th>130</th>
					</tr>
					<tr>
						<th>Мазнини</th>
						<th>65</th>
						<th>52</th>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default TotalToday