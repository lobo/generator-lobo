'use strict';

var mongoose = require('mongoose');
var	Schema   = mongoose.Schema;
var	ObjectId = Schema.ObjectId;

var <%= lowSchemaName %>Schema  = mongoose.Schema({
<% schemaFields.forEach(function(field, index) {
	switch(field.split(":")[1]){
	case 'String':  %>	<%= field.split(":")[0] + ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'Number':  %>	<%= field.split(":")[0] + ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'Date':  %>	<%= field.split(":")[0] + ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " , default: Date.now \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'Buffer':  %>	<%= field.split(":")[0] + ": {\n\t\t type: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'Boolean': %>	<%= field.split(":")[0] + ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'Mixed': %>	<%= field.split(":")[0] + ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'ObjectId': %>	<%= field.split(":")[0] + ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break;
	  case 'Array': %>	<%= field.split(":")[0]	+ ": {\n\t\ttype: " + field.split(":")[1] + ",\n\t\t" + "required: true,\n\t\t" + "unique: false" + " \n\t}" %><% if(schemaFields.length - 1 !== index ){ %>,<%= "\n" %><% } break; } }) %>,

	// timestamp
	created_at: {
		 type: Date,
		 default: Date.now
	},

	updated_at: {
		 type: Date,
		 default: Date.now
	}
});



// pre ======================
<%= lowSchemaName %>Schema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  next();
});

module.exports = mongoose.model('<%= capSchemaName %>', <%= lowSchemaName %>Schema);
