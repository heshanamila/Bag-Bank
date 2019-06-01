
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StoreSchema = new Schema({




	id: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	address: {
		detail: {
			type: 'String'
		},
		city: {
			type: 'String'
		},
		district: {
			type: 'String'
		},
		zipcode: {
			type: 'String'
		}
	},
	latitude: {
		type: 'Number'
	},
	longitude: {
		type: 'Number'
	},
	description: {
		type: 'String'
	},
	website: {
		type: 'String'
	},
	contact: {
		type: 'String'
	},
	email: {
		type: 'String'
	},
	type: {
		type: 'String'
	},
	rating: {
		service: {
			type: 'Number'
		}
	},
	room_types: {
		Large: {
			type: [
				'Mixed'
			]
		},
		Medium: {
			type: [
				'Mixed'
			]
		},
		Small: {
			type: [
				'Mixed'
			]
		}
	}

});

module.exports = Store = mongoose.model("stores", StoreSchema);