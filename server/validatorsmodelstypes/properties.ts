





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
		required: true
	},
	garages: { //parkingSpaces??
		type: Number,
		required: true
	},
	hasNegotiablePrice: {
		type: Boolean,
		required: false	// false
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	estateAgent: {
		type: mongoose.Types.ObjectId,
		required: true
	},
	propertyImages: {
		type: [String],
		required: true
	},
	tenancyType: {
		type: String,	//  "fixed" or "periodic"
		enum: ['fixed', 'periodic'],
		required: true
	},
	availableFrom: {
		type: Date,
		required: true
	},
	hasElevators: {
		type: Boolean,
		required: true
	},
	petFriendly: {
		type: Boolean,
		required: true
	},
	furnished: {
		type: Boolean,
		required: true
	},
	coordinates: {
		lattitude: Number,
		longitude: Number,
		required: true
	}
}, { timestamps: true, strict: "throw" })


export const ModelProperties = mongoose.model("properties", SchemaProperties)

