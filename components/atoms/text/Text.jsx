import clsx from 'clsx';
import styles from './text.module.scss';
import React from 'react';
import Link from 'next/link';

export default function Text({ tagName = 'p', children, url }) {
	// JSX를 반환하는 리액트 내장 메서드
	// React.createElement(elementType: string, props: object, children: JSX Node)
	// return <h1 className={clsx(styles.text)}>{children}</h1>
	// return React.createElement('h1', {className: clsx(styles.text)}, children)
	return React.createElement(
		tagName,
		{ className: clsx(styles.text) },
		// props로 전달받은 url값이 있으면 React.createElement로 Link 컴포넌트로 props값 설정한 뒤, children 감싸서 리턴
		url ? React.createElement(Link, { href: url }, children) : children
	);
}
