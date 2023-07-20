import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'textarea'> {
	label: string;
	characterLength?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ label, characterLength, ...props }, ref) => {
	return (
		<label>
			<div className="font-serif font-bold">{label}</div>
			<textarea
				className="w-full px-4 py-4 bg-white border-2 border-black focus:rounded-none focus:outline-none"
				ref={ref}
				maxLength={characterLength}
				{...props}
			/>
		</label>
	);
});
