import clsx from 'clsx';
import styles from './find-recipe.module.scss';
import { useRouter } from 'next/router';
import Breadcrumb from '@/components/molecules/breadcrumb/Breadcrumb';

export default function FindRecipe() {
	return (
		<section className={clsx(styles.findRecipe)}>
			<h1>Find-Recipe</h1>
			<Breadcrumb />
		</section>
	);
}
