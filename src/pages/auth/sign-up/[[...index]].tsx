import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="flex items-center justify-center w-full h-screen font-sans">
			<SignUp />
		</div>
	);
}
