var APP_DATA = {
  "scenes": [
    {
      "id": "0-pp1",
      "name": "pp1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0381643018929694,
          "pitch": -0.14292496101216123,
          "rotation": 0,
          "target": "1-pp2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pp2",
      "name": "pp2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5438853478194847,
          "pitch": 0.02886914652654049,
          "rotation": 0,
          "target": "2-pp3"
        },
        {
          "yaw": 0.050663965592260496,
          "pitch": 0.017616500975563554,
          "rotation": 0,
          "target": "0-pp1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pp3",
      "name": "pp3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4980577951687586,
          "pitch": 0.02746607003671464,
          "rotation": 0,
          "target": "1-pp2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
