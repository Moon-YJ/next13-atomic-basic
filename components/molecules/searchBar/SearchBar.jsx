import clsx from 'clsx';
import styles from './searchBar.module.scss';
import Input from '@/components/\batoms/input/Input';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ value, onChange, className, placeholder }) {
	return (
		// debouncing은 부모 컴포넌트에서 적용(atoms나 molecules 컴포넌트에서는 가급적이면 custom hook 사용하지 않는것을 권장, 추후 관리를 위해 organisms 이상부터 적용하는걸로)
		<div className={clsx(styles.searchBar, className)}>
			<Input value={value} onChange={onChange} placeholder={placeholder} />
			<button>
				<CiSearch size={20} />
			</button>
		</div>
	);
}
