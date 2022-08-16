const sharp = require('sharp');

sharp('./original.png')
    .resize(300, 300)
    .toFile('resized.png');