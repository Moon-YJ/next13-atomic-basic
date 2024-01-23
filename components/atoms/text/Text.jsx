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

export default function Text({
	tagName = 'p',
	children,
	url,
	styleType,
	className,
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
				className
			),
		},
		// props로 전달받은 url값이 있으면 React.createElement로 Link 컴포넌트로 props값 설정한 뒤, children 감싸서 리턴
		url ? React.createElement(Link, { href: url }, children) : children
	);
}
