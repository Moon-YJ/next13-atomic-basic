import clsx from 'clsx';
import styles from './list.module.scss';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function List({ tagName, data, className, url, divider = ':' }) {
	const router = useRouter();

	return React.createElement(
		tagName,
		{ className: clsx(styles.list, className) },
		data.map((el, idx) => {
			const child = tagName === 'ol' ? `${idx + 1} ${divider} ${el}` : el;
			return React.createElement(
				'li',
				{
					key: idx,
					// 해당 li의 url이름과 현재 라우터명이 동일하면 해당 li 활성화
					className: clsx(router.pathname === url[idx] && styles.on),
				},
				url ? React.createElement(Link, { href: url[idx] }, child) : child
			);
		})
	);
}
