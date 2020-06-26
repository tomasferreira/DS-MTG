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
          "to": "dc04294ab9da5ad4a620b83582556542",
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
        "id": "c56045bec4bdbaba7cd59736a825ad0a",
        "isList": "0",
        "isWizard": "0",
        "name": "Run Script",
        "script": "var API = require(\"dev.mtg/api/api\");\nnew API().syncAll();",
        "show_logging": "0",
        "suppress_messages": "0",
        "use_ids": "0"
      },
      "height": 40,
      "id": "c56045bec4bdbaba7cd59736a825ad0a",
      "left": 340,
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
    },
    {
      "data": {
        "cancel": "Cancel",
        "default_button": "ok",
        "id": "dc04294ab9da5ad4a620b83582556542",
        "message": "Sync all cards?",
        "name": "Confirmation",
        "ok": "OK",
        "show_cancel": "1",
        "type": "info"
      },
      "height": 40,
      "id": "dc04294ab9da5ad4a620b83582556542",
      "left": 150,
      "output": { },
      "routes": [
        {
          "condition": "success:eq:1:true",
          "order": 0,
          "text": "Ok",
          "to": "c56045bec4bdbaba7cd59736a825ad0a",
          "type": "ok"
        },
        {
          "condition": "success:eq:0:false",
          "order": 1,
          "text": "Cancel",
          "type": "cancel"
        }
      ],
      "text": "Confirmation",
      "top": 0,
      "type": "confirm",
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