import { replacements } from '@/utils/placeholderUtils';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Filter from 'bad-words';

interface Props {
	register: any;
	errors: any;
	control: any;
	name: string;
}
const filter = new Filter();

const validateTemplate = (template: string) => {
	const isProfane = filter.isProfane(template);
	if (isProfane) return 'Template contains offensive language.';
	if (template.length <= 32) return 'Template must be longer than 32 characters.';
	return true;
};
const TemplateEditor: React.FC<Props> = ({ control, name }) => {
	return (
		<div>
			<div id={'editor'} className="font-sans bg-white border-2 border-black">
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<ReactQuill
							placeholder={PLACEHOLDER}
							className="overflow-hidden font-sans"
							value={field.value}
							onChange={field.onChange}
							onBlur={field.onBlur}
							modules={modules}
						/>
					)}
					rules={{
						required: true,
						validate: (value) => validateTemplate(value),
					}}
				/>
			</div>
			<div className="flex items-start gap-4 mt-3">
				<div className="font-serif font-bold">Supported placeholders:</div>
				<div className="flex flex-wrap items-center gap-1">
					{Object.entries(replacements).map(([key]) => (
						<div className="px-1 text-sm bg-white border-2 border-black" key={key}>
							{key}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default TemplateEditor;

const modules = {
	toolbar: [
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['link'],
		['clean'],
	],
};

const PLACEHOLDER = `Hello [Them],

I hope this email finds you well. 

I am writing to inform you that [Event] will take place at [Time] on [Date]. The venue for this event is [Address], [City], [Country]. 

Should you need any additional information, feel free to contact me at [Email] or [Phone].

Best regards,
[You]
[Role]
[Email]`;
