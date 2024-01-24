import clsx from 'clsx';
import styles from './gallery.module.scss';
import { useState } from 'react';
import SearchBar from '@/components/molecules/searchBar/SearchBar';
import Category from '@/components/molecules/category/Category';

export default function Gallery() {
	const [Val, setVal] = useState('');

	const dataArr = [
		{ name: 'David', age: 20 },
		{ name: 'Amy', age: 30 },
		{ name: 'Paul', age: 10 },
	];
	const nameArr = dataArr.map((data) => data.name);
	// Category 내부적으로 isOn값을 담기 위해서 두개의 데이터를 비교하기 위해서는 둘다 State에 담겨있는 자료여야 하기 때문에
	// 전달할 전체 배열, 선택된 값 둘다 State에 담긴 값으로 Category에 전달
	const [DataArr] = useState(dataArr);

	const [Selected, setSelected] = useState(dataArr[0]);

	// Category에 onClick으로 전달되는 핸들러함수는 무조건 다음과 같은 구조로 생성
	// 파라미터로 활성화될 데이터 전달 받아서 해당 컴포넌트에 생성한 state에 담아주는 구조
	const handleClick = (activeEl) => {
		setSelected(activeEl);
		console.log(activeEl);
	};

	return (
		<section className={clsx(styles.gallery)}>
			<h1>Gallery page</h1>
			<SearchBar value={Val} onChange={setVal} />
			{/* 무조건 전체 배열 데이터와 현재 활성화 데이터를 전달, 카테고리 컴포넌트 내부적으로 onClick이벤트 발생시 클릭한 요소 순번의 데이터를 부모에 있는 state에 옮겨담아주는 핸들러 함수도 전달 */}
			{/* dataArr에는 무조건 배열이 들어가는데 배열의 구성요소가 문자일수도 있고 객체일수도 있음, 배열의 구성요소가 문자가 아닌 객체일때는 메뉴명으로 활용할수 없기 때문에 nameArr에 문자로 구성된 배열을 직접 전달 */}
			<Category
				dataArr={DataArr}
				selectedEl={Selected}
				nameArr={nameArr}
				onClick={handleClick}
			/>
		</section>
	);
}
