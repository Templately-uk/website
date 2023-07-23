import { usePostTemplate } from '@/hooks/usePostTemplate';
import Filter from 'bad-words';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiLoader } from 'react-icons/fi';
import { TiTick } from 'react-icons/ti';
import { Button } from '../../ui/Button';
import FieldError from '../../ui/FieldError';
import GoBackButton from '../../ui/GoBackButton';
import { Input } from '../../ui/Input';
import PageTitle from '../../ui/PageTitle';
import SectionTitle from '../../ui/SectionTitle';
import { TextArea } from '../../ui/TextArea';
import Container from '../../ui/layouts/Container';
import Layout from '../../ui/layouts/Layout';
import Sidebar from './Sidebar';

const TemplateEditor = dynamic(() => import('./TemplateEditor'), {
	ssr: false,
});
const filter = new Filter();

const Publish = () => {
	const router = useRouter();
	const { onSubmit: onTemplateSubmit } = usePostTemplate();
	const [loading, setLoading] = useState(false);

	const {
		handleSubmit,
		control,
		register,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onSubmit',
		defaultValues: {
			tags: [],
			category: '',
			title: '',
			template: '',
			usecase: '',
		},
	});
	const onSubmit = async (data: any) => {
		setLoading(true);
		const result = await onTemplateSubmit(data);
		if (result) await router.push(`/templates/${result}`);
		setLoading(false);
	};
	const onErrors = (errors: any) => {
		console.log('errors: ');
		console.log(errors);
	};

	return (
		<Layout title={'Publish a new template'}>
			<Container>
				{/* */}
				<form onSubmit={handleSubmit(onSubmit, onErrors)}>
					<div className="grid grid-cols-12 gap-6">
						<div className="col-span-12 mt-20 md:col-span-8">
							<GoBackButton />
							<div className="mt-6">
								<div className="block p-2 mb-4 font-serif font-medium bg-red-300 border-2 border-red-500 sm:hidden">
									⚠️ Please where possible, kindly switch to a desktop device instead of a mobile device. Problems may
									arise when using a mobile device.
								</div>
								<PageTitle title="Publish" />
								<SubText>Compose and submit your own email template for everyone to use</SubText>
								{/* Template section */}
								<section className="mt-10">
									<SectionTitle title="Template" />
									<div className="mt-4">
										<TemplateEditor register={register} errors={errors} control={control} name={'template'} />
										{errors?.template?.type === 'required' && <FieldError error={'Template is required'} />}
										{errors?.template?.message && <FieldError error={String(errors.template.message)} />}
									</div>
								</section>
								{/* Meta section */}
								<section className="mt-12">
									<SectionTitle title="Meta" />
									<div className="mt-4">
										<Input
											label="Title *"
											placeholder="Enter a template title"
											aria-invalid={errors.title ? 'true' : 'false'}
											{...register('title', {
												required: true,
												minLength: 6,
												maxLength: 64,
												validate: (value) => (!filter.isProfane(value) ? true : 'Title contains offensive language'),
											})}
										/>
										{errors?.title?.type === 'required' && <FieldError error={'Title is required'} />}
										{errors?.title?.type === 'minLength' && (
											<FieldError error={'Title must be longer than 6 characters'} />
										)}
										{errors?.title?.type === 'maxLength' && (
											<FieldError error={'Title must be less than 64 characters'} />
										)}
										{errors?.title?.message && <FieldError error={String(errors.title.message)} />}
									</div>
									<div className="mt-8">
										<TextArea
											label="Use case *"
											placeholder="Usecase for the template"
											{...register('usecase', {
												required: true,
												minLength: 32,
												maxLength: 132,
												validate: (value) => (!filter.isProfane(value) ? true : 'Usecase contains offensive language'),
											})}
										/>
										{errors?.usecase?.type === 'required' && <FieldError error={'Usecase is required'} />}
										{errors?.usecase?.type === 'minLength' && (
											<FieldError error={'Usecase must be longer than 32 characters'} />
										)}
										{errors?.usecase?.type === 'maxLength' && (
											<FieldError error={'Usecase must be less than 164 characters'} />
										)}
										{errors?.usecase?.message && <FieldError error={String(errors.usecase.message)} />}
									</div>
								</section>

								{/* Submit section */}
								<section className="mt-20">
									<SectionTitle title="Submit" />
									<SubText>Press the &apos;submit template&apos; to upload the template to our systems</SubText>
									<div className="mt-4">
										<Button
											type={'submit'}
											className="font-bold shadow-[-3px_3px_0_0_#000] px-4 py-2 bg-white border-2 border-black"
										>
											<div className="flex items-center gap-1">
												{loading ? (
													<div className="animate-spin">
														<FiLoader />
													</div>
												) : (
													<>
														{isValid && (
															<div className="">
																<TiTick />
															</div>
														)}
													</>
												)}
												<div>Submit template</div>
											</div>
										</Button>
									</div>
								</section>
							</div>
						</div>
						{/* Sidebar */}
						<div className="flex items-start justify-center col-span-12 sm:justify-end md:col-span-4 mt-14">
							<Sidebar register={register} errors={errors} control={control} />
						</div>
					</div>
				</form>
			</Container>
		</Layout>
	);
};

const SubText = ({ children }: { children: React.ReactNode }) => <div className="mt-2">{children}</div>;

export default Publish;
