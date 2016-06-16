/**
 * Entity.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	autoCreatedAt:false,
	autoUpdatedAt:false,
  attributes: {

  	name:{type:'string'},

  	//add a reference to tenent
  	owner:{model:'tenent'},

  	fields:{
  		collection:'field',
  		via:'holder'
  	}
  }
};

