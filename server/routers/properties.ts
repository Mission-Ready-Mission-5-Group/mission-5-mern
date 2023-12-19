import express from "express";


const router = express.Router()


router.get("/search", (req, res) => {
	res.json({ message: "testing" })
})

//  "/:id" route must be placed BELOW the other routes to prevent overriding them
router.get("/:id", (req, res) => {
	res.json({ message: "testing" })
})

export const routerProperties = express.Router().use("/properties", router)