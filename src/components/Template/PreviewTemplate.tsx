import { replacePlaceholders } from '@/utils/placeholderUtils';
import React from 'react';

interface Props {
	template: string | undefined;
}
const placeholder = '';
const PreviewTemplate: React.FC<Props> = ({ template }) => {
	if (template) {
		return (
			<div
				id={'template'}
				className="p-6 font-sans bg-white border-2 border-black"
				dangerouslySetInnerHTML={{ __html: template ? replacePlaceholders(template) : placeholder }}
			></div>
		);
	} else {
		return (
			<div id={'template'} className="p-6 font-sans bg-white border-2 border-black">
				<div className="w-full h-5 bg-black/10 animate-pulse"></div>
				<div className="w-full h-5 mt-2 bg-black/10 animate-pulse"></div>
				<div className="w-full h-20 mt-4 bg-black/10 animate-pulse"></div>
			</div>
		);
	}
};

export default PreviewTemplate;
