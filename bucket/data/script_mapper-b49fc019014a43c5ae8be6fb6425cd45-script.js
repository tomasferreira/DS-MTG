'esversion: 6';
var HTTPScriptable = require("core/HTTPScriptable");
var TripMessageMapper = BaseMapper.create({
    search: function (vals) {
        var h = new HTTPScriptable('https://www.mtgjson.com/json/RAV.json');
        let response = h.get();
        console.log("query got HTTP code: " + response.getResponseCode());
        let responseObj = JSON.parse(response.getResponseBody()).cards;
        let records = [];
        if(!responseObj) return records;
		let counter = 1;
        responseObj.forEach(message => {
            let record = {
                id: counter,
            };
            records.push(record);
			counter++;
        });
        return records;
    }
});
module.exports = TripMessageMapper;