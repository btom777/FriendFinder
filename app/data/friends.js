var ash = {
	'name': 'Ash',
	'photo': 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/7/16/enhanced/webdr09/enhanced-24541-1452201163-2.png', 
	'scores': ['5', '2', '3', '1', '3', '4', '1', '4', '5', '1']
};

var misty = {
	'name': 'Misty',
	'photo': 'http://vignette1.wikia.nocookie.net/nintendo/images/7/73/Misty_(Anime_-_1).png/revision/latest?cb=20121111060531&path-prefix=en',
	'scores': ['1', '5', '1', '4', '3', '5', '3', '2', '5', '3']
};

var brock = {
	'name': 'Brock',
	'photo': 'http://emotibot.net/pix/4568.png',
	'scores': ['3', '1', '3', '5', '3', '5', '5', '4', '3', '1']
};

//brock = 33
//misty = 32
//ash = 29

var score = 0;
var characters = ['ash', 'misty', 'brock'];
var ashScore = 0;
var mistyScore = 0;
var brockScore = 0;

var data = {
	'name': "";
	'photo': "";
}


// function userScore() {
// 	for(i = 0; i < userData.score.length; i++) {
// 		score += userData.score[i] + score;
// 	}
// };

function compare(res) {
	for (i = 0; i < ash.scores.length; i++) {
		ashScore += abs(userData.score[i] - ash.scores[i]);
	}
	for (i = 0; i < misty.scores.length; i++) {
		mistyScore += abs(userData.score[i] - misty.scores[i]);
	}
	for (i = 0; i < brock.scores.length; i++) {
		brockScore += abs(userData.score[i] - brock.scores[i]);
	}

	if (ashScore > mistyScore && ashScore > brockScore) {
		data.name = ash.name;
		data.photo = ash.photo;
	} else if (mistyScore > ashScore && mistyScore > brockScore) {
		data.name = misty.name;
		data.photo = misty.photo;
	} else {
		data.name = brock.name;
		data.photo = brock.photo;
	}
};

