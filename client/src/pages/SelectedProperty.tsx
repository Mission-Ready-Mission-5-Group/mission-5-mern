import { useParams } from "react-router-dom"



const SelectedProperty = () => {
	const {id} = useParams()
	console.log("id",id)
	return (
		<h1>This is the selected property with id </h1>
	)
}

export default SelectedProperty