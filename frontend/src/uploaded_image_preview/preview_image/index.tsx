import { useEffect } from "react";
import { motion } from "framer-motion";

import "./index.scss";

export const UploadImagePreview = ({ file }: { file: File }) => {
	useEffect(() => {
		let imageElement = document.getElementById("output") as HTMLImageElement;
		const url = URL.createObjectURL(file);
		imageElement.src = url;
	}, [file]);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className='image-preview'
		>
			<img className='image-preview__image' alt='' id='output' />
		</motion.div>
	);
};
