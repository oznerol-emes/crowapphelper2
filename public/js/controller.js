angular.module("CrowAVTApp", [])
	.controller("HeroesController", HeroCtrl);

HeroCtrl.$inject = ["$http"];

	function HeroCtrl($http) {
		var hCtrl = this;

		hCtrl.newHero = {};
		hCtrl.newHQ = {};
		hCtrl.heroList = [];
		hCtrl.hqList = [];
		hCtrl.greeting = "Fill out Application below, Thank You for using the Crow Application Helper.";
	
hCtrl.createHero = function(){
		hCtrl.newHero.powers = hCtrl.newHero.powers.split(", ");
		hCtrl.newHero.weaknesses = hCtrl.newHero.weaknesses.split(", ");
	
		$http.post("/api/heroes", hCtrl.newHero) 
			.then(function(success){
				console.log('Created hero: ', success.data);
				hCtrl.newHero = {}; 
				hCtrl.heroList.push(success.data);
			}, function(error) {
				console.log('Error creating new Hero', error);
			});
		
}
		hCtrl.getHeroes = function() {
			$http.get('/api/heroes')
			.then(function(success){
				console.log('Got heroes:', success.data);
				hCtrl.heroList = success.data;
			}, function (error){
				console.log("Error getting heroes: ", error);			
			});	
	}

		hCtrl.deleteHero = function(id, index){
			bootbox.confirm("Are you sure you want to delete the hero?", function(result){
				if(result) {
					console.log("Deleting hero: ", id);

					$http.delete('/api/heroes/' +id) //ask why semicolon broke it
						.then(function(success){
							console.log('Deleted hero: ', success.data);
							hCtrl.heroList.splice(index, 1);
						}, function (error) {
							console.log("Error deleting new Hero: ", error);
						});
				}
			});
		}

		hCtrl.createHQ = function(){
			hCtrl.newHQ.amenities = hCtrl.newHQ.amenities.split(", ");

			$http.post("/api/hqs", hCtrl.newHQ)
				.then(function(success){
					console.log("Created HQ: ", success.data);
					hCtrl.newHQ = {};
					hCtrl.hqList.push(success.data);
				}, function(error){
					console.log("Error getting HQs: ", error);
				});
		}

		hCtrl.getHQs = function(){
			$http.get("/api/hqs")
				.then(function(success){
					console.log("Got HQs:", success.data);
					hCtrl.hqList = success.data;
				}, function(error){
						console.log("Error getting HQs: ", error);
				});
		}

		hCtrl.deleteHQ = function(id, index){
			
			bootbox.confirm("Are you sure you want to delete the HQ?", function(result){
				if(result){
					console.log("Deleting HQ: ", id);

					$http.delete('/api/hqs/'+id)
						.then (function(success){
							console.log("Deleted hq: ", success.data);
							hCtrl.hqList.splice(index, 1 );

						}, function(error){
							console.log("Error deleting hq: ", error);
						});
					}
				});
		}

}
