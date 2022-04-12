const sharp = require("sharp")

sharp("FPBsEpTWUAQQ7VB.jpeg")
    .resize(200, 80, {
        fit: "contain",
        position: "center"
    })
    .toFile("out.png")