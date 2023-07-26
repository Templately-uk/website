// Importing libraries
import dynamic from 'next/dynamic';

// Importing layouts
import Container from '../ui/layouts/Container';
import Layout from '../ui/layouts/Layout';

// Importing types
import { Tone, tones } from '@/types/Tone';

// Importing components
import Comments from './Comments/Comments';
import SideDialog from './SideDialog';
import ToneProgress from './ToneProgress';

// Importing hooks
import { Template } from '@/types/Template';
import { FiLoader } from 'react-icons/fi';
import GoBackButton from '../ui/GoBackButton';

const PreviewTemplate = dynamic(() => import('./PreviewTemplate'), { ssr: false });

interface Props {
	route: string;
	template: Template;
}
const TemplateComponent = ({ template }: Props) => {
	let useCase = template.useCase;
	if (useCase && !useCase.endsWith('.')) useCase += '.';
	return (
		<Layout
			title={`Template: ${template.title}`}
			openGraph={{
				title: `Template: ${template.title}`,
				description: `Template: ${template.useCase}`,
				type: 'website',
			}}
		>
			<Container>
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 mt-20 sm:col-span-8">
						<GoBackButton />
						<div className="mt-6">
							{!template.reviewed && (
								<div className="p-4 mb-4 text-sm text-black bg-red-300 border-2 border-red-600">
									Pending Review: This template is currently in queue for moderation and will be visible in search once
									reviewed and approved.
								</div>
							)}
							<TitleSection title={template.title} />
							<UseCaseSection usecase={useCase} />
							<TemplateSection template={template.template} />
							<AITonesSection aiTones={template.aiTones} />
							<CommentsSection route={template.route} />
						</div>
					</div>
					<div className="flex items-start justify-center col-span-12 sm:justify-end sm:col-span-4 mt-14">
						<SideDialog data={template} />
					</div>
				</div>
			</Container>
		</Layout>
	);
};

const CommentsSection = ({ route }: { route: string | undefined }) => {
	return (
		<div className="mt-20">
			<div className="font-serif text-3xl font-black">Comments</div>
			<div>
				{route ? (
					<Comments route={route} />
				) : (
					<div>
						<div className="w-[60%] h-12 bg-black/10 animate-pulse"></div>
					</div>
				)}
			</div>
		</div>
	);
};

const AITonesSection = ({ aiTones }: { aiTones: Tone[] | undefined }) => {
	return (
		<div className="mt-14">
			<div className="font-serif text-3xl font-black">Analysis</div>
			<div className="mt-4">
				<div className="">
					{aiTones ? (
						<>
							{aiTones.length > 0 ? (
								<ToneProgress
									toneProgress={aiTones.map((tone) => ({
										tone: tones[tone.name.toLowerCase()],
										percentage: tone.value || 0,
									}))}
								/>
							) : (
								<div className="w-full h-[200px]">
									<div className="flex items-center justify-center h-full">
										<div className="flex items-center gap-1 px-10 py-6 text-lg font-bold bg-white border-2 border-black">
											<div>
												<FiLoader className="animate-spin" />
											</div>
											<div>Analysing template, stay tuned</div>
										</div>
									</div>
								</div>
							)}
						</>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</div>
	);
};

const TemplateSection = ({ template }: { template: string | undefined }) => {
	return (
		<div className="mt-12">
			<div className="font-serif text-3xl font-black">Template</div>
			<div className="mt-4">
				<PreviewTemplate template={template} />
			</div>
		</div>
	);
};

const TitleSection = ({ title }: { title: string | undefined }) => {
	return (
		<div className="font-serif text-6xl font-black">
			{title ? (
				<div>{title}</div>
			) : (
				<div>
					<div className="w-[60%] h-12 bg-black/10 animate-pulse"></div>
				</div>
			)}
		</div>
	);
};

const UseCaseSection = ({ usecase }: { usecase: string | undefined }) => {
	return (
		<section className="mt-4">
			{usecase ? (
				<div>{usecase}</div>
			) : (
				<div>
					<div className="w-full h-4 bg-black/10 animate-pulse"></div>
					<div className="w-[80%] h-4 mt-1 bg-black/10 animate-pulse"></div>
					<div className="w-[50%] h-4 mt-1 bg-black/10 animate-pulse"></div>
				</div>
			)}
		</section>
	);
};

export default TemplateComponent;
