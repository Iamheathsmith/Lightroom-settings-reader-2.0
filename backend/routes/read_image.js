'use strict';

import express from 'express';
import exifr from 'exifr'

const router = express.Router();

router.route;

router.route('/file-upload').post((request, response) => {
	const imageBuffer = request.files.file.data;

	exifr.parse(imageBuffer, true)
	.then((data) => response.send(data))
	.catch('something went wrong in the parsing')
});

export { router };
