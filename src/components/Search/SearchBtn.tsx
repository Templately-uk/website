import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
import { FiLoader } from 'react-icons/fi';
import SVGDoodle from '../../../public/doodles/search.svg';
import styles from '../../styles/search-button.module.scss';

interface Props {
	loading: boolean;
	frontPage?: boolean;
}

const SearchBtn: React.FC<Props> = ({ loading, frontPage = false }) => {
	return (
		<button type="submit" className={classNames(styles.button, 'font-sans', 'h-full relative')}>
			<div className="relative">
				<div className="flex items-center gap-1">
					{loading && <FiLoader className="animate-spin" />}
					<div>Search</div>
				</div>
				{frontPage && (
					<div className="absolute z-30" style={{ top: '-55px', right: '-70px' }}>
						<Image className="rotate-180" width={35} height={35} alt="doodle" src={SVGDoodle} />
					</div>
				)}
			</div>
		</button>
	);
};

export default SearchBtn;
