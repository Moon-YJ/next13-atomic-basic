import clsx from 'clsx';
import styles from './about.module.scss';
import Card from '@/components/molecules/card/Card';

export default function About() {
	return (
		<section className={clsx(styles.about)}>
			<h1>About page</h1>
			<Card
				className={clsx(styles.item)}
				txt='Post Title'
				styleType='horizontal'
				imgSrc='https://images.unsplash.com/photo-1705957231585-c092c8396c70?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
			/>
		</section>
	);
}

/*
	atomic pattern 개발에서 스타일링시 주의할 점
	- 원자단위, 분자단위 컴포넌트에서는 많이 쓰일만한 베이직한 스타일만 적용
	- 특정 스타일로 자주 쓰이는 디자인 패턴이 있다면 styleType으로 연동 처리
	- 페이지별로 상세 디자인은 가급적이면 호출하는 페이지 컴포넌트 레벨에서 className을 상속함으로써 스타일 지정
*/
