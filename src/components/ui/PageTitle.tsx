interface Props {
	title: string;
}
const PageTitle: React.FC<Props> = ({ title }) => {
	return <h1 className="font-serif text-6xl font-black">{title}</h1>;
};

export default PageTitle;
