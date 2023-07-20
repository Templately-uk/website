interface Props {
	children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
	return <div className="max-w-6xl px-4 py-0 m-0 mx-auto">{children}</div>;
};

export default Container;
