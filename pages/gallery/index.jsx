import clsx from 'clsx';
import styles from './gallery.module.scss';
import { useState } from 'react';
import SearchBar from '@/components/molecules/searchBar/SearchBar';

export default function Gallery() {
	const [Val, setVal] = useState('');

	return (
		<section className={clsx(styles.gallery)}>
			<h1>Gallery page</h1>
			<SearchBar value={Val} onChange={setVal} />
		</section>
	);
}
