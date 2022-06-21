import {useState, useRef} from 'react'
import {nanoid} from 'nanoid'
import StepsItem from './StepsItem.jsx'

export default function Steps() {
	const [data, setData] = useState([
		{date: '2022-06-18', distance: '12', id: 1}
	])
	const [date, setDate] = useState('')
	const [distance, setDistance] = useState('')
	const inputElement = useRef(null);

	const dateTraining = (event) => {
		setDate(event.target.value)
	}

	const distanceTraining = (event) => {
		setDistance(event.target.value)
	}

	const formattingDate = (string) => {
		return string.replaceAll('-', '')
	}

	const sendTraining = (event) => {
		event.preventDefault()
		const exisTraining = data.find(el => parseInt(formattingDate(el.date))==parseInt(formattingDate(date)))

		if(exisTraining) {
			exisTraining.distance = parseInt(exisTraining.distance) + parseInt(distance)
			setDate([...data])
		}

		else {
			setData([...data, {date, distance, id: nanoid() }])
		}
		setDistance('')
		setDate('')
	}

	const deleteData = (iden) => {
		setData(data.filter(dataItem => dataItem.id != iden))
	}

	const updateData = (dateItem, dataItem) => {
		setDate(dateItem)
		setDistance(dataItem)
		inputElement.current.focus();
	}

	return (
		<>
			<form action="#" className="steps">
				<div className="field_steps">
					<p>Дата(ДД.ММ.ГГ)</p>
					<input onChange={dateTraining} value={date} name='date' className="input_steps" type="date"/>
				</div>
				<div className="field_steps">
					<p>Пройдено км</p>
					<input onChange={distanceTraining} value={distance} ref={inputElement} name='distance' className="input_steps" type="text"/>
				</div>
				<button onClick={sendTraining} className="button_steps">Ок</button>
			</form>
			<header className="steps">
				<div className="field_steps"><p>Дата(ДД.ММ.ГГ)</p></div>
				<div className="field_steps"><p>Пройдено км</p></div>
				<div className="field_steps"><p>Действия</p></div>
			</header>
			<div className="steps_data">
				<StepsItem data={data} deleteData={deleteData} updateData={updateData} formattingDate={formattingDate} />
			</div>
		</>
	)
}