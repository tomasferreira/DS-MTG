{
  "flow": [
    {
      "data": { },
      "height": 40,
      "id": "start",
      "left": 0,
      "output": { },
      "routes": [
        {
          "condition": "",
          "order": 0,
          "text": "Always",
          "to": "97511835aefd613eab537c1a0a8a6c31",
          "type": "always"
        }
      ],
      "static_routes": true,
      "stuck": true,
      "text": "Start",
      "top": 0,
      "type": "box",
      "width": 100
    },
    {
      "data": {
        "hide_loading": "0",
        "id": "97511835aefd613eab537c1a0a8a6c31",
        "isList": "0",
        "isWizard": "0",
        "name": "insert test2",
        "script": "console.log('start');\nvar recordVar = new FRecord('test2');\nrecordVar.insert(); // or .insert()\nconsole.log('inserted');",
        "show_logging": "0",
        "suppress_messages": "0",
        "use_ids": "0"
      },
      "height": 40,
      "id": "97511835aefd613eab537c1a0a8a6c31",
      "left": 160,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Success",
          "type": "success"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Failure",
          "type": "error"
        }
      ],
      "text": "insert test2",
      "top": 0,
      "type": "script",
      "width": 100
    }
  ],
  "inputs": [
    {
      "attributes": {
        "buckets": "true",
        "choice_type": "typeahead"
      },
      "labels": {
        "label": "Bucket",
        "labelp": "Buckets"
      },
      "name": "bucketId",
      "type": "choice"
    },
    {
      "attributes": {
        "bucket_slot": "bucketId",
        "choice_type": "typeahead"
      },
      "labels": {
        "label": "Record",
        "labelp": "Records"
      },
      "name": "record",
      "type": "choice"
    }
  ],
  "outputs": [ ],
  "properties": {
    "async": false,
    "flow_type": "fa2e1dcabde8433fb933eeb942f59d37"
  }
}