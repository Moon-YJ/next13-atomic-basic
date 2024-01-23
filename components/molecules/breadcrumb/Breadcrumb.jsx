import clsx from 'clsx';
import styles from './breadcrumb.module.scss';
import Text from '@/components/\batoms/text/Text';
import React from 'react';
import { useRouter } from 'next/router';

export default function Breadcrumb({ divider = '-' }) {
	const pathArr = useRouter().asPath.split('/');
	const customText = (txt, spc = '-') => {
		txt = txt.includes(spc)
			? txt
					.split(spc)
					.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
					.join(' ')
			: txt.charAt(0).toUpperCase();
		return txt;
	};

	return (
		<nav className={clsx(styles.breadcrumb)}>
			{pathArr.map((name, idx) => {
				const displayName = customText(name);
				return (
					<React.Fragment key={idx}>
						<Text
							tagName={idx === pathArr.length - 1 ? 'strong' : 'em'}
							isOn={idx === pathArr.length - 1}
							url={!(idx === pathArr.length - 1) && '/' + name}
						>
							{name === '' ? 'Home' : displayName}
						</Text>
						{!(idx === pathArr.length - 1) && <span> {divider} </span>}
					</React.Fragment>
				);
			})}
		</nav>
	);
}
