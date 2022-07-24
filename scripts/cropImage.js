import sharp from 'sharp';

// original image
let originalImage = 'static/cards.png';

// file name for cropped image
let outputImage = 'static/cards/abc.png';

const ImageWidth = 110;
const ImageHeight = 163;
const ImageGap = 10.5;

for (let i = 0; i < 1; i++) {
	for (let j = 0; j < 13; j++) {
		const left = ImageWidth*j + ImageGap*j;
		const top = ImageHeight*i + ImageGap*i;
		console.log(left, top)
	sharp(originalImage).extract({ width: ImageWidth, height: ImageHeight, left: left, top: top }).toFile(`static/cards/${i}${j}.png`)
			.then(function(new_file_info) {
					console.log("Image cropped and saved");
			})
			.catch(function(err) {
					console.log("An error occured");
			});
	}
}
	
