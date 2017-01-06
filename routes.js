var Hero = require('./controllers/heroes.js');
var HQ = require('./controllers/hqs.js');

module.exports = (app)=>{
	app.get('/', (req, res)=>{
		res.sendFile("index.html", {root: "./public/html"});
	});
	//hero
	app.post('/api/heroes', Hero.create);
	app.get('/api/heroes', Hero.get);
	app.delete('/api/heroes/:id', Hero.delete);

	//hq
	app.post('/api/hqs', HQ.create);
	app.get('/api/hqs', HQ.get);
	app.delete('/api/hqs/:id', HQ.delete);

	// app.get('*', (req,res)=>{
	// 	res.redirect('localhost:1337/auth.html')
	// })

}