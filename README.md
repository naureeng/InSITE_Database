**InSITE_Database/**

├── README.md                      ← you are here
├── generate_manifest.py           ← run locally after adding/removing images
│
└── Website/
    ├── index.html                 ← site entry point / tab navigation
    │
    ├── adultbrain.html            ← **Adult Brain gallery**
    ├── adultbrain/
    │   ├── manifest.json          ← auto-generated image list 
    │   ├── *.jpg                  ← full-size images
    │   └── _thumb/
    │       └── *.jpg              ← thumbnails (same filenames as full-size)
    │
    ├── adultvnc.html              ← **Adult VNC gallery**
    ├── adultvnc/
    │   ├── manifest.json          ← auto-generated image list
    │   ├── *.jpg                  ← full-size images
    │   └── _thumb/
    │       └── *.jpg              ← thumbnails (same filenames as full-size)
    │
    ├── larvalbrain.html           ← **Larval Brain gallery**
    ├── larvalbrain/                
    │   ├── manifest.json          ← auto-generated image list
    │   ├── *.jpg                  ← full-size images
    │   └── _thumb/
    │       └── *.jpg              ← thumbnails (same filenames as full-size)
    │
    └── assets/
        └── style.css              ← shared styles
