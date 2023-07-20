import React from 'react';
import styles from '../../styles/search-button.module.scss';
import classNames from 'classnames';
import { FiLoader } from 'react-icons/fi';

interface Props {
	loading: boolean;
}
const SearchBtn: React.FC<Props> = ({ loading }) => {
	return (
		<button type="submit" className={classNames(styles.button, 'font-sans', 'h-full')}>
			<div className="flex items-center gap-1">
				{loading && <FiLoader className="animate-spin" />}
				<div>Search</div>
			</div>
		</button>
	);
};

export default SearchBtn;
