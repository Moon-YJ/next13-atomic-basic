import Head from 'next/head';
import axios from 'axios';
import clsx from 'clsx';
import styles from './Home.module.scss';
import Text from '@/components/\batoms/text/Text';
import Pic from '@/components/\batoms/pic/Pic';

export default function Home({ meals }) {
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>

			<main className={clsx(styles.main)}>
				<h1>Main page</h1>
				<Text tagName='h1' url='/' styleType='logo'>
					LOGO
				</Text>
				<Text tagName='h2' styleType='title1'>
					Title
				</Text>
				<Text>blah blah blah</Text>
				<Text styleType='slogan'>Slogan</Text>
				{meals.map((item, idx) => {
					if (idx >= 5) return;
					if (idx % 2 === 0) {
						return (
							<div key={item.idMeal}>
								<div className={clsx(styles.bg)}>
									<Pic imgSrc={item.strMealThumb} />
								</div>
							</div>
						);
					} else
						return (
							<div key={item.idMeal}>
								<div className={clsx(styles.bg)}>
									<Pic
										imgSrc={item.strMealThumb}
										imgTxt={item.strMeal}
										url='/gallery'
									/>
								</div>
							</div>
						);
				})}
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
