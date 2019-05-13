var mongoose = require('mongoose');
var util = require('../util');

// schema
var trainingDateSchema = mongoose.Schema({
	solutionName:{type:String, required:true},
	startDate:{type:String},
	endDate:{type:String},
	title:{type:String},
	name:{type:String},
	time:{type:String},
	place:{type:String},
	period:{type:String},
	createdAt:{type:Date, default:Date.now},
	updatedAt:{type:Date}
},{
	toObject:{virtuals:true}
});

// virtuals
trainingDateSchema.virtual('createdDate')
.get(function(){
	return util.getDate(this.createdAt);
});

trainingDateSchema.virtual('createdTime')
.get(function(){
	return util.getDate(this.createdAt);
});

trainingDateSchema.virtual('updatedDate')
.get(function(){
	return util.getDate(this.updatedAt);
});

trainingDateSchema.virtual('updatedTime')
.get(function(){
	return util.getDate(this.updatedAt);
});

// model & export
var TrainingDate = mongoose.model('trainingdate', trainingDateSchema);
module.exports = TrainingDate;
