import mongoose from "mongoose";

// Maps Schema in Mongoose
const SchemaMaps = new mongoose.Schema({
	gymsNearby: {
		type:
			[{
				lattitude: Number,
				longitude: Number
			}],
		require: true
	},
	parksNearby: {
		type:
			[{
				lattitude: Number,
				longitude: Number
			}],
		require: true
	},
	superMarketsNearby: {
		type:
			[{
				lattitude: Number,
				longitude: Number
			}],
		require: true
	},
	cinemasNearby: {
		type:
			[{
				lattitude: Number,
				longitude: Number
			}],
		require: true
	},
	swimmingPoolsNearby: {
		type:
			[{
				lattitude: Number,
				longitude: Number
			}],
		require: true
	},
})