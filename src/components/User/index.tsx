import { useDeleteTemplate } from '@/hooks/useDeleteTemplate';
import { useFetchUserProfile } from '@/hooks/useFetchUserProfile';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FiEye, FiTrash } from 'react-icons/fi';
import GoBackButton from '../ui/GoBackButton';
import PageTitle from '../ui/PageTitle';
import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/layouts/Container';
import Layout from '../ui/layouts/Layout';

const User = () => {
	const router = useRouter();
	const { data } = useFetchUserProfile();
	const { onSubmit: onDelete } = useDeleteTemplate();

	const onHandleDelete = async (templateID: number) => {
		if (window.confirm('Are you sure you want to delete this template?')) {
			await onDelete(templateID);
			setTimeout(() => {
				router.reload();
			}, 1000);
		}
	};

	return (
		<Layout>
			<Container>
				<section className="mt-12">
					<GoBackButton />
					<PageTitle title="My account" />
				</section>
				<section className="mt-6">
					<SectionTitle title="Templates" />
					{data ? (
						<div className="flex flex-wrap gap-2 mt-3">
							{data.templates.map((template, index) => (
								<div
									key={index}
									className="p-6 bg-white border-2 border-black hover:shadow-[-3px_3px_0_0_#000] transition-all"
								>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="font-serif text-2xl font-black">{template.title}</div>
											<div>•</div>
											<div className="text-lg capitalize">{template.category}</div>
										</div>
									</div>
									<div className="text-gray-600">{moment(template.createdAt).format('MMM YY')}</div>
									<div className="mt-2 text-gray-600">
										<div className="text-sm">{template.useCase}</div>
									</div>
									<div className="flex items-center gap-2 mt-4">
										{template.tags.map((tag, index) => (
											<div className="px-2 py-1 text-sm bg-primary" key={index}>
												{tag.name}
											</div>
										))}
									</div>
									<div className="mt-4">
										<div className="flex items-center gap-2">
											<button
												onClick={() => router.push(`/templates/${template.route}`)}
												className="p-1 text-sm bg-white border border-black hover:bg-primary"
											>
												<FiEye />
											</button>
											<button
												onClick={() => onHandleDelete(template.id)}
												className="p-1 text-sm bg-white border border-black hover:bg-primary"
											>
												<FiTrash />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="flex flex-wrap gap-2 mt-2">
							<div className="h-44 mt-2 w-[300px] bg-black/10 animate-pulse"></div>
							<div className="h-44 mt-2 w-[500px] bg-black/10 animate-pulse"></div>
						</div>
					)}
				</section>
				<section className="mt-20">
					<SectionTitle title="Account" />
					<div className="p-4 mt-2 text-black bg-red-100 border-2 border-red-200 ">
						🔔 We&apos;re currently in our early alpha stage. For any account changes, including deletions, please
						contact us directly at contact@templately.co.uk. We appreciate your patience and support as we continue to
						improve and add more features to our platform.
					</div>
				</section>
			</Container>
		</Layout>
	);
};

export default User;
