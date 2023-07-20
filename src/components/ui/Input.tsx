import { ComponentProps, forwardRef } from 'react';

interface Props extends ComponentProps<'input'> {
	label: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input({ label, type = 'text', ...props }, ref) {
	return (
		<label>
			<div className="font-serif font-bold">{label}</div>
			<input
				className="w-full px-4 py-4 bg-white border-2 border-black focus:rounded-none focus:outline-none"
				type={type}
				ref={ref}
				{...props}
			/>
		</label>
	);
});
