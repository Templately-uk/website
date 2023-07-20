import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './ButtonOrLink';

const buttonStyles = cva('flex items-center justify-center px-4 py-2', {
	variants: {
		intent: {
			primary: 'border-black border-2 font-bold font-sans text-xs sm:text-sm md:text-base',
		},
		fullWidth: {
			true: 'w-full',
		},
	},
	defaultVariants: {
		intent: 'primary',
	},
});

export interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, ...props }: Props) {
	return <ButtonOrLink className={buttonStyles({ intent, fullWidth })} {...props} />;
}
