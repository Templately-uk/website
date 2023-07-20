export interface Tone {
	value?: number;
	name: string;
	color: string;
	opposites: string[];
}

export const tones: Record<string, Tone> = {
	professional: { name: 'Professional', color: '#708090', opposites: ['Casual', 'Humorous'] },
	friendly: { name: 'Friendly', color: '#FFD700', opposites: ['Formal', 'Critical'] },
	assertive: { name: 'Assertive', color: '#FF4500', opposites: ['Polite', 'Cautious'] },
	polite: { name: 'Polite', color: '#98FB98', opposites: ['Assertive', 'Sarcastic'] },
	humorous: { name: 'Humorous', color: '#FFDAB9', opposites: ['Professional', 'Critical'] },
	critical: { name: 'Critical', color: '#B22222', opposites: ['Friendly', 'Sympathetic'] },
	inviting: { name: 'Inviting', color: '#FFA07A', opposites: ['Critical', 'Cautious'] },
	formal: { name: 'Formal', color: '#2F4F4F', opposites: ['Casual', 'Friendly'] },
	casual: { name: 'Casual', color: '#FFB6C1', opposites: ['Formal', 'Professional'] },
	grateful: { name: 'Grateful', color: '#8B4513', opposites: ['Critical', 'Sarcastic'] },
	apologetic: { name: 'Apologetic', color: '#778899', opposites: ['Assertive', 'Critical'] },
	cautious: { name: 'Cautious', color: '#FF6347', opposites: ['Assertive', 'Inviting'] },
	sarcastic: { name: 'Sarcastic', color: '#DAA520', opposites: ['Polite', 'Grateful'] },
	sympathetic: { name: 'Sympathetic', color: '#6A5ACD', opposites: ['Critical', 'Sarcastic'] },
	motivational: { name: 'Motivational', color: '#32CD32', opposites: ['Critical', 'Cautious'] },
	informative: { name: 'Informative', color: '#5F9EA0', opposites: ['Sarcastic', 'Humorous'] },
	urgent: { name: 'Urgent', color: '#FF0000', opposites: ['Cautious', 'Polite'] },
	reassuring: { name: 'Reassuring', color: '#00CED1', opposites: ['Critical', 'Urgent'] },
	instructional: { name: 'Instructional', color: '#4682B4', opposites: ['Casual', 'Humorous'] },
	appreciative: { name: 'Appreciative', color: '#8A2BE2', opposites: ['Critical', 'Urgent'] },
};
