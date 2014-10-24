var Hapi = require ("hapi");
var server = new Hapi.Server(8888, "localhost");
var Joi = require("joi");

server.route({
    path: "/hello/{name*2}",
    method: "GET",
    config{
    handler: function(request, reply) {
		var names = request.params.name.split("/");
		reply({
			first : names [0],
			last : names [1],
			mood : request.query.mood || "neutral"
		});
	},
	validate: {
		params: {
			name: Joi.string().min(8).max(100)
		},
		query:{
			mood:
Joi.string().valid(["neutral", "happy", "sad"]).default("neutral")
		}
	}
};
 server.start();