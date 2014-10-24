var Hapi = require("hapi");
var mongodb =require ('mongodb')
var dbRunners = "mongodb://maryams:mary1900@linus.mongohq.com:10085/dbRunners"
var mongoClient= mongodb.MongoClient;

var server = Hapi.createServer('0.0.0.0', 8080);
server.views({
    engines: {
        jade: require("jade")
    },
    path: "./views"
});


/*var myData;
mongoClient.connect(dbRunners, function(err, db) {
							if (err) console.log(err);
                var collection = db.collection('articles');
                collection.find().sort({ "id": -1}).toArray(function (err, docs) {
									myData = docs
								})});*/

										
 server.route({
   method: 'GET',
   path: '/Jade',
   config: {
       handler: function (request, reply) {
									  reply.view('view-home');
                      
                 
								}}
								});
   /*
   server.route({
   method: 'GET',
   path: '/articles/new',
     config: {
       handler: function (request, reply) {
           
           reply('new entry here');
     
       },
       }
   });
   
   server.route({
       method: 'GET',
       path: '/articles/{id}',
       config: {
           handler: function (request, reply) {
               reply('You asked for the page ' + request.params.id);
           },
           validate: {
               params: {
                   id: Joi.string().required()
               }
           }
       }
   })
   
   
   server.route({
       method: 'GET',
       path: '/articles/{id}/edit',
       config: {
           handler: function (request, reply) {
               reply('You want to edit ' + request.params.id +', ja? ');
           },

       }
   });
   
   

	 */
   server.start();