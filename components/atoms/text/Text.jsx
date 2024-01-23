import clsx from 'clsx';
import styles from './text.module.scss';
import React from 'react';
import Link from 'next/link';
import { Nanum_Myeongjo } from 'next/font/google';
import { Orbitron } from 'next/font/google';

const nanum = Nanum_Myeongjo({
	subsets: ['latin'],
	weight: ['400', '700'],
	preload: true,
	variable: '--font-nanum',
});

const orbitron = Orbitron({
	subsets: ['latin'],
	weight: ['400', '600'],
	preload: true,
	variable: '--font-orbitron',
});

// Text 컴포넌트에서 부모로부터 이벤트핸들러 받을때, 보통 전달받는 값은 순서, fetching data, e 객체
// 위의 값 세가지를 비구조할당으로 전달 받음(없으면 아무런 변화 X, 있으면 활용)
export default function Text({
	tagName = 'p',
	children,
	url,
	styleType,
	className,
	isOn = false,
	onClick,
	data,
	idx,
}) {
	// JSX를 반환하는 리액트 내장 메서드
	// React.createElement(elementType: string, props: object, children: JSX Node)
	// return <h1 className={clsx(styles.text)}>{children}</h1>
	// return React.createElement('h1', {className: clsx(styles.text)}, children)
	return React.createElement(
		tagName,
		{
			className: clsx(
				styles.text,
				nanum.variable,
				orbitron.variable,
				styles[styleType], // ex) styles.logo
				className,
				isOn && styles.on
			),
			// onClick props로 전달되는 핸들러함수에 어떤 값이 쓰일지 모르기 때문에 일단 다 연결
			// 주의: 객체로 묶어주지 않으면 특정 인수가 전달되지 않았을때 파라미터 순서가 변경되므로 이를 방지하기 위해 객체로 인수를 묶음
			onClick: (e) => onClick({ e, idx, data }),
		},
		// props로 전달받은 url값이 있으면 React.createElement로 Link 컴포넌트로 props값 설정한 뒤, children 감싸서 리턴
		url ? React.createElement(Link, { href: url }, children) : children
	);
}
