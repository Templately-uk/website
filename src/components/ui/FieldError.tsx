import React, { FC } from 'react';
import { GoAlertFill } from 'react-icons/go';

interface Props {
	error: string | undefined;
}
const FieldError: FC<Props> = ({ error }) => {
	return (
		<>
			{error && (
				<div
					className="p-2 mt-2 font-sans text-sm font-medium text-white bg-red-600 border-2 border-black"
					role="alert"
				>
					<div className="flex items-center gap-1">
						<GoAlertFill />
						<div>{error}</div>
					</div>
				</div>
			)}
		</>
	);
};

export default FieldError;
