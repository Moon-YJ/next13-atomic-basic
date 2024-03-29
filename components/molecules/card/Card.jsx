import clsx from 'clsx';
import styles from './card.module.scss';
import Pic from '@/components/\batoms/pic/Pic';
import Text from '@/components/\batoms/text/Text';

export default function Card({ imgSrc, txt, url, styleType, className }) {
	return (
		<article className={clsx(styles.card, className, styles[styleType])}>
			<Pic imgSrc={imgSrc} url={url} />
			{txt && <Text>{txt}</Text>}
		</article>
	);
}
