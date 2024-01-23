import clsx from 'clsx';
import styles from './breadcrumb.module.scss';
import Text from '@/components/\batoms/text/Text';
import React from 'react';
import { useRouter } from 'next/router';

export default function Breadcrumb() {
	const pathArr = useRouter().asPath.split('/');

	return (
		<nav className={clsx(styles.breadcrumb)}>
			{pathArr.map((name, idx) => {
				return (
					<React.Fragment key={idx}>
						<Text
							tagName='span'
							isOn={idx === pathArr.length - 1}
							url={!(idx === pathArr.length - 1) && '/' + name}
						>
							{name === '' ? 'Home' : name}
						</Text>
						{!(idx === pathArr.length - 1) && <span>/</span>}
					</React.Fragment>
				);
			})}
		</nav>
	);
}
