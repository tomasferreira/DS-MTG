'esversion: 6';
var HTTPScriptable = require("core/HTTPScriptable");

module.exports = Class.create({
    deleteAll: function () {

        var cardRecord = new FRecord('card');
        cardRecord.search();
        while (cardRecord.next()) {
            console.log('deleting record: ' + cardRecord.name);
            cardRecord.del();
        }
    },

    syncAll: function () {
        var h = new HTTPScriptable('https://www.mtgjson.com/files/StandardCards.json');
        let response;
        try {
            response = h.get();
        } catch (error) {
            console.log('error: ' + error);
            return;
        }
        console.log("query got HTTP code: " + response.getResponseCode());

        let responseObj = JSON.parse(response.getResponseBody());
        if (!responseObj) return;

        console.log('response length: ' + Object.keys(responseObj).length);

        for (const cardName in responseObj) {
            if (responseObj.hasOwnProperty(cardName)) {
                console.log(cardName);
                const card = responseObj[cardName];

                var cardRecord = new FRecord('card');

                // cardRecord.uuid = card.uuid;
                cardRecord.name = card.name;

                cardRecord.insert();
                break;
            }
        }
        return records;
    }
});