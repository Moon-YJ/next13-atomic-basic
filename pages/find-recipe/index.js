import clsx from 'clsx';
import styles from './find-recipe.module.scss';
import NavBar from '@/components/molecules/navBar/NavBar';

export default function FindRecipe() {
	return (
		<section className={clsx(styles.findRecipe)}>
			{/* Navbar호출시 화면에 출력할 메뉴명 전달 */}
			<NavBar data={['Find Recipe', 'Gallery', 'About']} />
		</section>
	);
}
