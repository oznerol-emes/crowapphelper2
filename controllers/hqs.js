var HQ = require('../models/headquarters.js');

module.exports = {
	//to create new hero
	create: (req,res)=>{
		var newHQ = new HQ(req.body);

		newHQ.save((err,data)=>{
			if(err){
				res.send(err);
			} else {
				res.send(data);
			}
		});
	},

	//route handler to get all heroes into database
	get: (req,res)=>{
		HQ.find({}, (err,data)=>{
			if(err){
				res.send(err);
			} else {
				res.send(data);
			}
		})
	},

	//to delete hero
	delete: (req,res)=>{
		HQ.findOneAndRemove({_id: req.params.id}, (err, data)=>{
			if(err){
				res.send(err);
			} else {
				res.send(data);
			}
		})
	}


}