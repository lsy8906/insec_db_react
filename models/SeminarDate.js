var mongoose = require('mongoose');
var util = require('../util');

// schema
var seminarDateSchema = mongoose.Schema({
	solutionName:{type:String, required:true},
	startDate:{type:String},
	title:{type:String},
	name:{type:String},
	time:{type:String},
	place:{type:String},
	createdAt:{type:Date, default:Date.now},
	updatedAt:{type:Date}
},{
	toObject:{virtuals:true}
});

// virtuals
seminarDateSchema.virtual('createdDate')
.get(function(){
	return util.getDate(this.createdAt);
});

seminarDateSchema.virtual('createdTime')
.get(function(){
	return util.getDate(this.createdAt);
});

seminarDateSchema.virtual('updatedDate')
.get(function(){
	return util.getDate(this.updatedAt);
});

seminarDateSchema.virtual('updatedTime')
.get(function(){
	return util.getDate(this.updatedAt);
});

// model & export
var SeminarDate = mongoose.model('seminardate', seminarDateSchema);
module.exports = SeminarDate;
