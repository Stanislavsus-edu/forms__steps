import TrainingSettings from './TrainingSettings.jsx'

export default function StepsItem({data, deleteData, updateData, formattingDate}) {

	data.sort((a, b) => parseInt(formattingDate(b.date)) - parseInt(formattingDate(a.date)));

	return (
		<ul>
			{data.map((el) => {
				return (
					<li className="training_item" key={el.id}>
						<div>{el.date}</div>
						<div>{el.distance}</div>
						<div className="training_settings">
							<TrainingSettings el={el} deleteData={deleteData} updateData={updateData}/>
						</div>
					</li>
				)
			})}
		</ul>
		)
}