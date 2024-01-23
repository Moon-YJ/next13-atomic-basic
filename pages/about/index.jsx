import clsx from 'clsx';
import styles from './about.module.scss';

export default function About() {
	return (
		<div className={clsx(styles.about)}>
			<h1>About page</h1>
		</div>
	);
}