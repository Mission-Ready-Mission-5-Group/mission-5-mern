





//#################################################################################################
//							MONGOOSE
//#################################################################################################

import mongoose from "mongoose";

// Properties Schema in Mongoose
const SchemaProperties = new mongoose.Schema({
	streetAddress: {
		type: String,
		required: true
	},
	suburb: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	bedrooms: {
		type: Number,
		required: true
	},
	bathrooms: {
		type: Number,
		require: true
	},
	garages: { //parkingSpaces??
		type: Number,
		require: true
	},
	hasNegotiablePrice: {
		type: Boolean,
		require: false
	},
	price: {
		type: Number,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	estateAgent: {
		type: mongoose.Types.ObjectId,
		require: true
	},
	propertyImages: {
		type: [String],
		require: true
	},
	tenancyType: {
		type: String,	//  "fixed" or "periodic"
		require: true
	},
	availableForm: {
		type: Date,
		require: true
	},
	hasElevators: {
		type: Boolean,
		require: true
	},
	petFriendly: {
		type: Boolean,
		require: true
	},
	furnished: {
		type: Boolean,
		require: true
	},
	coordinates: {
		lattitude: Number,
		longitude: Number,
		require: true
	}
}, { timestamps: true, strict: "throw" })


export const ModelProperties = mongoose.model("properties", SchemaProperties)

