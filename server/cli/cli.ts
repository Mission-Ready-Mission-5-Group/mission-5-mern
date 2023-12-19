import { program } from "commander"
import mongoose from "mongoose";
import { CONFIG } from "../utils/config/config";
import fs from "fs"
import { ModelProperties } from "../validatorsmodelstypes/properties";
import { propertiesData } from "./propertiesData";



async function init() {

	// console.log(fs.readFileSync("./properties.json", "utf-8"))
	try {

		console.log("Connecting to mongodb")
		await mongoose.connect(`mongodb://${CONFIG.MONGO_HOST}:27017/workouts`)

		program
			.command("seed")
			.description("seed data")
			.action(async () => {
				console.log("Attempting to insert properties data")
				await ModelProperties.insertMany(propertiesData)
				console.log("Seed successful")
			})

	} catch (err) {
		throw new Error(`${err}`)
	}
}
init()