interface Props {
	title: string;
}
const SectionTitle: React.FC<Props> = ({ title }) => {
	return <h2 className="font-serif text-4xl font-black">{title}</h2>;
};

export default SectionTitle;
