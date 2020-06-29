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
          "to": "05e1ed39d4221790642bf39d78d09805",
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
        "id": "05e1ed39d4221790642bf39d78d09805",
        "name": "Run Script",
        "script": "var API = require(\"dev.mtg/api/api\");\nnew API().deleteAll();"
      },
      "height": 40,
      "id": "05e1ed39d4221790642bf39d78d09805",
      "left": 180,
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
      "text": "Run Script",
      "top": 0,
      "type": "script",
      "width": 100
    }
  ],
  "inputs": [ ],
  "outputs": [ ],
  "properties": {
    "async": false,
    "flow_type": "96be53bad37c4862adcc6bc75223eb41"
  }
}