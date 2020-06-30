'esversion: 6';
var HTTPScriptable = require("core/HTTPScriptable");
var fs = require('core/fs');

module.exports = Class.create({
    deleteAll: function () {

        var runner = new ProcessRunner('touch');
        runner.addArgument('test.text');
        console.log(runner.executeCommand());

        // var cardRecord = new FRecord('card');
        // cardRecord.addSearch('name', 'Solar Blaze');
        // cardRecord.search();
        // while (cardRecord.next()) {
        //     console.log('deleting record: ' + cardRecord.name);
        //     console.log(typeof cardRecord.json);
        //     console.log(JSON.parse(cardRecord.json).manaCost);
        //     console.log(typeof cardRecord.test);
        //     for (const key in cardRecord.test) {
        //         if (cardRecord.test.hasOwnProperty(key)) {
        //             const element = cardRecord.test[key];
        //             console.log('hello')
        //         }
        //     }
        //     let o = cardRecord.json;


        //     // cardRecord.del();
        //     break;
        // }
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