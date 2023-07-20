import { Tone, tones } from '@/types/Tone';
import React from 'react';

interface ToneProgress {
	tone: Tone;
	percentage: number;
}

interface Props {
	toneProgress: ToneProgress[];
}

const ToneProgress: React.FC<Props> = ({ toneProgress }) => {
	return (
		<div className="">
			{toneProgress.map((_, index) => (
				<div className="grid grid-cols-12 mb-3" key={index}>
					<div className="col-span-4">
						<div className="font-serif font-bold">{_.tone.name}</div>
					</div>
					<div className="flex items-center col-span-8 space-x-2">
						<div className="relative w-full h-4 overflow-hidden border-2 border-black">
							<div
								className={`absolute left-0 top-0 h-4`}
								style={{ backgroundColor: `black`, width: `${_.percentage}%` }}
								// style={{ backgroundColor: `${_.tone.color}`, width: `${_.percentage}%` }}
							></div>
						</div>
						<span className="w-10 font-semibold">{_.percentage}%</span>
					</div>
				</div>
			))}
			{toneProgress.slice(0, 1).map((_, index) =>
				_.tone.opposites.map((oppToneName, index2) => {
					const oppTone = tones[oppToneName.toLowerCase()];
					return (
						<div className="grid grid-cols-12 mb-3" key={index * index2}>
							<div className="col-span-4">
								<div className="font-serif font-bold" style={{ opacity: 0.3 }}>
									{oppTone.name}
								</div>
							</div>
							<div className="flex items-center col-span-8 space-x-2">
								<div className="relative w-full h-4 bg-gray-300" style={{ opacity: 0.3 }}>
									<div
										className={`absolute left-0 top-0 h-4`}
										style={{ backgroundColor: `${oppTone.color}`, width: `0%` }}
									></div>
								</div>
								<span className="w-10 font-semibold" style={{ opacity: 0.3 }}>
									0%
								</span>
							</div>
						</div>
					);
				}),
			)}
		</div>
	);
};

export default ToneProgress;
