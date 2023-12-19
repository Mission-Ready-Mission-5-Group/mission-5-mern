
import { useParams } from "react-router-dom"

const Apply = () => {
	const {id} = useParams()
	return (
		<h1>Apply to this property id: {id}</h1>
	)
}


export default Apply