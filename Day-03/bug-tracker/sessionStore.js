var guid = require('guid');

var store = {

};
function isNewSession(req){
	return typeof req.cookies.sessionid === 'undefined';
}
function createNewSession(res){
	var newSessionId = guid.raw();
	res.cookie("sessionid", newSessionId);
	store[newSessionId] = {};
	
	return newSessionId;
}
function getSession(req){
	return req.cookies["sessionid"];
}
function setSession(sessionid, req){
	store[sessionid] = store[sessionid] || {};
	store[sessionid].lastAccessTime = new Date();
	req.session = store[sessionid];
	if (store[sessionid].timer){
		clearTimeout(store[sessionid].timer);
	}
	store[sessionid].timer = setTimeout(function(){
		delete store.sessionid;
		console.log('session cleared - ', sessionid);
	}, 60000);
	
}


module.exports = function(req, res, next){
	var sessionid = '';
	if (isNewSession(req)){
		sessionid = createNewSession(res);
	} else {
		sessionid = getSession(req);
	}
	setSession(sessionid, req);
	next();
}