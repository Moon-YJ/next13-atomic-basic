import clsx from 'clsx';
import styles from './pic.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ClipLoader } from 'react-spinners';
import { useState } from 'react';
// npm i react-spinners

export default function Pic({ imgSrc, imgTxt, url }) {
	const [IsLoaded, setIsLoaded] = useState(false);

	return (
		<div className={clsx(styles.pic, imgTxt && styles.picTxt)}>
			<Image
				src={imgSrc}
				alt={imgSrc}
				priority
				fill
				sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
				onLoadingComplete={() => setIsLoaded(true)}
			/>
			{imgTxt && <h2>{imgTxt}</h2>}
			{url && <Link href={url}></Link>}
			<ClipLoader
				size={50}
				color='orangered'
				loading={!IsLoaded}
				cssOverride={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</div>
	);
}
