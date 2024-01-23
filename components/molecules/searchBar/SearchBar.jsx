import clsx from 'clsx';
import styles from './searchBar.module.scss';
import Input from '@/components/\batoms/input/Input';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ value, onChange, className, placeholder }) {
	return (
		<div className={clsx(styles.searchBar, className)}>
			<Input value={value} onChange={onChange} placeholder={placeholder} />
			<CiSearch />
		</div>
	);
}
