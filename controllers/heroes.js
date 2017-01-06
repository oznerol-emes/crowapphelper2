var Hero = require('../models/hero.js');

module.exports = {
	create: (req, res)=> {
		var newHero = new Hero(req.body);

		newHero.save((err, data)=>{
			if(err){
				res.send(err);
			} else {
				res.send(data);
			}
		});
	},
	get: (req, res)=>{
		Hero.find({}).populate('headquarters').exec((err, data)=>{
			if (err){
				res.send(err);
			} else {
				res.send(data);
			}
		});
	},
	delete: (req,res)=>{
		Hero.findOneAndRemove({_id: req.params.id}, (err, data)=>{
			if(err){
				res.send(err);
			} else {
				res.send(data);
			}
		})
	}
}