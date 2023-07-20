interface Props {
	children: React.ReactNode;
}
const Card: React.FC<Props> = ({ children }) => {
	return <div className="max-w-6xl px-4 mx-auto ">{children}</div>;
};

export default Card;
