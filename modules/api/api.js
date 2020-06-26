'esversion: 6';
var HTTPScriptable = require("core/HTTPScriptable");

module.exports = Class.create({
	syncAll: function() {
		var h = new HTTPScriptable('https://www.mtgjson.com/json/AllCards.json');
        let response = h.get();
        console.log("query got HTTP code: " + response.getResponseCode());

        let responseObj = JSON.parse(response.getResponseBody());
        if(!responseObj) return;

        
        for (const cardName in responseObj) {
            if (responseObj.hasOwnProperty(cardName)) {
                const card = responseObj[cardName];

                var cardRecord = new FRecord('card');

                cardRecord.uuid = card.uuid;
                cardRecord.name = card.name;

                cardRecord.insert();
                
            }
        }
        return records;
	}
});