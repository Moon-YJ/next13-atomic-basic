import clsx from 'clsx';
import styles from './gallery.module.scss';
import { useState } from 'react';
import SearchBar from '@/components/molecules/searchBar/SearchBar';
import Category from '@/components/molecules/category/Category';

export default function Gallery() {
	const [Val, setVal] = useState('');
	const fetchData = [
		{ name: 'David', age: 20 },
		{ name: 'Amy', age: 30 },
		{ name: 'Paul', age: 10 },
	];
	const names = fetchData.map((data) => data.name);
	const handleClick = ({ e, idx, data }) => {
		console.log(e.target.innerText);
		console.log(idx);
		console.log(data[idx]);
	};

	return (
		<section className={clsx(styles.gallery)}>
			<h1>Gallery page</h1>
			<SearchBar value={Val} onChange={setVal} />
			<Category
				fetchDataArr={fetchData}
				onClick={handleClick}
				nameArr={names}
			/>
		</section>
	);
}
