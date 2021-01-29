module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "win": {
                    "icon": "./favicon.ico",
                    "target": [
                        {
                            "target": "nsis",
                            "arch": [
                                "x64",
                                "ia32"
                            ]
                        }
                    ]
                },
                "linux": {
                    "icon": "./favicon.ico",
                    "target": [
                        "snap"
                    ]
                }
            }
        }
    }
}