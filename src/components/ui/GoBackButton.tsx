// GoBackBtn.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { AiOutlineLeft } from 'react-icons/ai';

const GoBackButton: React.FC = () => {
	const router = useRouter();

	const goBack = () => {
		router.back();
	};

	return (
		<button
			onClick={goBack}
			className="flex items-center gap-2 p-2 text-sm transition-colors border-2 border-transparent hover:border-black"
		>
			<div>
				<AiOutlineLeft className="text-xs" />
			</div>
			<div>Go back</div>
		</button>
	);
};

export default GoBackButton;
