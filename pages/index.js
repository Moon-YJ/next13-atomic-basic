import Head from 'next/head';
import axios from 'axios';

export default function Home(props) {
	//console.log(props);
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>

			<main>
				<h1>Main page</h1>
			</main>
		</>
	);
}

// ssg 방식으로 페이지 랜더링
export async function getStaticProps() {
	// serialize 에러시 반환받은 promise 객체에서 실제 data값을 비구조화할당으로 받아서 props로 전달
	const { data } = await axios.get('/filter.php?c=Seafood');
	//console.log(data);
	// return으로 props객체를 컴포넌트로 전달시 revalidate 속성 없으면 SSG 방식, 해당 속성 추가하면 ISR방식(현재는 24시간마다 새로운 data fetching하게 처리)
	return { props: data, revalidate: 60 * 60 * 24 };
}
