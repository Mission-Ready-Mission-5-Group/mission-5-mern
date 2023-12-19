import { useState } from "react"
import { useParams } from "react-router-dom"



const SelectedProperty = () => {
	const {id} = useParams()
	return (
		<>
			<h1>Selected property id: {id}</h1>
		</>
	)
}

export default SelectedProperty