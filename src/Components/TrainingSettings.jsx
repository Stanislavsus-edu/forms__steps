export default function TrainingSettings({el, deleteData, updateData}) {

	const updateTraining = () => {
		updateData(el.date, el.distance)
	}

	const deleteTraining = () => {
		deleteData(el.id)
	}

	return (
		<>
			<div onClick={deleteTraining} style={{cursor: 'pointer'}}>✘</div>
			<div onClick={updateTraining} style={{cursor: 'pointer'}}>✎</div>
		</>
	)
}