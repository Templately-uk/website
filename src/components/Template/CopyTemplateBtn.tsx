import React from 'react';
import styles from '../../styles/button.module.scss';

interface Props {
	onClick: () => void;
}
const CopyTemplateBtn: React.FC<Props> = ({ onClick }) => {
	return (
		<button onClick={onClick} className={styles.button}>
			Copy template
		</button>
	);
};

export default CopyTemplateBtn;
