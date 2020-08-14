const sharp = require("sharp")

sharp("./image.jpg")
    .resize(500, 200, {
        fit: "contain",
        background: {
            r: 255,
            b: 255,
            g: 0,
        },
        position: "left"
    })
    .toFile("out_2.jpg")