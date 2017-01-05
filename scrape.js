'use strict'

var Xray = require('x-ray');
var x = Xray();

function getInfo(userId,res) {
	return new Promise((resolve,reject) => {
		x(`https://twitter.com/${userId}`, {
			image: 'img.ProfileAvatar-image@src',
			tweets: 'a[data-nav="tweets"] span.ProfileNav-value',
			following_count: 'a[data-nav="following"] span.ProfileNav-value',
			followers_count: 'a[data-nav="followers"] span.ProfileNav-value',
			bio: '.ProfileHeaderCard-bio'
			})((err, response)=> {
				resolve(response);
				if (!response.bio) {
					response.bio = "No bio available";
				}
			});		
	});
}


module.exports = {
	getInfo
}