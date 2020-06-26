// 'esversion: 6';
// var HTTPScriptable = require("core/HTTPScriptable");

module.exports = Class.create({
	syncAll: function() {
		var h = new HTTPScriptable('https://www.mtgjson.com/json/RAV.json');
        let response = h.get();
        console.log("query got HTTP code: " + response.getResponseCode());
        // let responseObj = JSON.parse(response.getResponseBody());
        // let records = [];
        // if(!responseObj) return records;
        // responseObj.forEach(message => {
        //     let record = {
        //         id: message.Id,
        //         message: message.Message ? message.Message : '',
        //         creator: message.CreatorName ? message.CreatorName : '',
        //         created: message.CreateOn ? Date.parse(message.CreateOn) : '',
        //     };
        //     records.push(record);
        // });
        // return records;
	}
});