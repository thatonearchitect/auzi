var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-1",
      "name": "Panorama 1",
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
          "yaw": -0.5816409044678945,
          "pitch": 0.06734548377328053,
          "rotation": 0,
          "target": "1-panorama-2"
        },
        {
          "yaw": -0.12403739359537269,
          "pitch": 0.03796265001367516,
          "rotation": 0,
          "target": "2-panorama-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-2",
      "name": "Panorama 2",
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
          "yaw": 0.6182144182446976,
          "pitch": 0.08168722874946255,
          "rotation": 0,
          "target": "0-panorama-1"
        },
        {
          "yaw": -0.9502093728226146,
          "pitch": 0.11267164685315834,
          "rotation": 0,
          "target": "2-panorama-3"
        },
        {
          "yaw": -0.5382242578381344,
          "pitch": 0.03874939067167915,
          "rotation": 0,
          "target": "3-panorama-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama-3",
      "name": "Panorama 3",
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
          "yaw": 1.2686358621439258,
          "pitch": 0.1298600800356713,
          "rotation": 0,
          "target": "1-panorama-2"
        },
        {
          "yaw": -0.7679209522108188,
          "pitch": 0.06329578511807554,
          "rotation": 0,
          "target": "3-panorama-4"
        },
        {
          "yaw": 0.6090165264655685,
          "pitch": 0.05634478246351193,
          "rotation": 0,
          "target": "0-panorama-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama-4",
      "name": "Panorama 4",
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
          "yaw": 0.5786437750842861,
          "pitch": 0.033161399981356254,
          "rotation": 0,
          "target": "2-panorama-3"
        },
        {
          "yaw": 0.5786437750842861,
          "pitch": 0.033161399981356254,
          "rotation": 0,
          "target": "2-panorama-3"
        },
        {
          "yaw": -0.045653090089837534,
          "pitch": 0.03683741757118497,
          "rotation": 0,
          "target": "1-panorama-2"
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
