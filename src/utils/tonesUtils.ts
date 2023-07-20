import { Tone, tones } from '@/types/Tone';

// professional:45,
export const transformAiTones = (aiTonesString: string): Tone[] => {
	const toneStrings = aiTonesString.split(',');

	const aiTones: Tone[] = toneStrings.flatMap((toneString) => {
		const [name, value] = toneString.split(':');
		const tone = tones[name.toLowerCase()]; // Lookup the tone from the tones Record
		if (tone) {
			return [{ ...tone, value: parseInt(value, 10) }];
		} else {
			return [];
		}
	});

	return aiTones;
};
