import express from "express";


const router = express.Router()

// Route Example: /api/properties/search&location=auckland&gym=1&park=1
router.get("/search/", (req, res) => {
	console.log("req.query\t", req.query)
	const { location, gym, park, supermarket, cinema, swimmingPool } = req.query

	res.json({ message: "testing2" })
})

//  "/:id" route must be placed BELOW the other routes to prevent overriding them
router.get("/:id", (req, res) => {
	res.json({ message: "testing" })
})

export const routerProperties = express.Router().use("/properties", router)