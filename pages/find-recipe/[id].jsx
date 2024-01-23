import { TableCol, TableRow } from '@/components/\batoms/table/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Detail() {
	const [Recipe, setRecipe] = useState(null);
	const recipe = {
		member: [
			{ name: 'David', age: 20, address: 'Seoul' },
			{ name: 'Amy', age: 32, address: 'Incheon' },
			{ name: 'James', age: 41, address: 'Busan' },
		],
	};

	useEffect(() => {
		axios.get('/search.php?s=Arrabiata').then((json) => setRecipe(json));
	}, []);

	return (
		<section>
			<h1>Detail</h1>
			<TableCol
				data={Object.values(recipe)[0]}
				title={Object.keys(recipe)[0]}
				isCount
				reverse
			/>
			<TableRow
				data={Object.values(recipe)[0]}
				title={Object.keys(recipe)[0]}
				isCount
			/>
		</section>
	);
}
