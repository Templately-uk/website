import classNames from 'classnames';
import { MdEmail } from 'react-icons/md';

interface Props {
	className?: string;
}
const Logo: React.FC<Props> = ({ className }) => {
	return (
		<div className={classNames('font-serif flex items-center gap-1 font-black text-black', className)}>
			<div>
				<MdEmail />
			</div>
			<div>Templately</div>
			<div className="hidden font-sans text-xs font-light md:block opacity-70">closed-alpha</div>
		</div>
	);
};

export default Logo;
