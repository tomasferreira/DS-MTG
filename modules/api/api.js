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

        let responseCode = response.getResponseCode();
        let responseObj = JSON.parse(response.getResponseBody());
        console.log("query got HTTP code: " + responseCode);

        if (responseCode != 200 || !responseObj) {
            console.log('bad response');
            return;
        }

        console.log('response length: ' + Object.keys(responseObj).length);

        for (const cardName in responseObj) {
            if (responseObj.hasOwnProperty(cardName)) {
                console.log(cardName);
                const card = responseObj[cardName];

                var cardRecord = new FRecord('card');
                if (!cardRecord.getRecord(card.uuid)) {
                    console.log('card not found, creating new');
                    cardRecord.newRecord();
                }

                // console.log(cardRecord.name)
                // cardRecord.rarity = card.rarity;
                cardRecord.json = JSON.stringify(card);
                cardRecord.name = card.name;
                cardRecord.text = card.text;

                cardRecord.colors = card.colors.join('||');


                if (cardRecord.isNewRecord()) {
                    cardRecord.id = card.uuid;
                    cardRecord.insert();
                } else {
                    cardRecord.update();
                }
                // break;
            }
        }
        return records;
    }
});