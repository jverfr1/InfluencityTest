'use strict'
var TwitInfo = require('../models/TwitRequest');
var Scrape = require('../scrape');

function getLog(req,res) {
	TwitInfo.find({}, (err,data)=> {
		res.status(200).send(data);
	})
}
function getUserInfo(req,res) {
	var rest   = res;
	var userId = req.params.userId;
	Scrape.getInfo(userId,rest)
    .then(
        	(response) => {
			    var data = new TwitInfo();
			    data.date = Date();
			    data.data = response;
			    data.save((err,logStored)=>{
			    	if (err) {
			    		return res.status(500).send({message: "Errors"});
			    	}	
			    	return res.status(200).json({data: response});
			    });
        })
    .catch(
        // Log the rejection reason
        function(error) {
            console.log('Handle rejected promise ('+error+') here.');
        });

}

module.exports = {
	getLog,
	getUserInfo
}