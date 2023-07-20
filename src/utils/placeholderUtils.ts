import moment from 'moment';

// Assuming all these arrays are filled with strings
const roles = ['Manager', 'Developer', 'Designer', 'Tester'];
const companies = ['Microsoft', 'Apple', 'Amazon', 'Google'];
const names = ['John', 'Jane', 'Tom', 'Alice'];
const projects = ['Project A', 'Project B', 'Project C'];
const products = ['Product X', 'Product Y', 'Product Z'];
const prices = ['99.99', '49.99', '149.99'];
const addresses = ['123 Main St', '456 Pine St', '789 Oak St'];
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const countries = ['USA', 'Canada', 'UK', 'Australia'];
const phoneNumbers = ['123-456-7890', '098-765-4321', '555-555-5555'];
const titles = ['Mr.', 'Ms.', 'Mrs.', 'Dr.'];
const events = ['Event 1', 'Event 2', 'Event 3'];
const times = ['10:00 AM', '2:00 PM', '6:00 PM'];
const usernames = ['username1', 'username2', 'username3'];
const orderNumbers = ['Order001', 'Order002', 'Order003'];

const emailDomains = ['gmail.com', 'outlook.com', 'yahoo.co.uk', 'hotmail.co.uk', 'btinternet.com'];
const randomElement = (array: string[]): string => array[Math.floor(Math.random() * array.length)];

export const replacements: Record<string, string[]> = {
	Role: roles,
	Company: companies,
	You: names,
	Them: names,
	Email: emailDomains.map((domain) => `${randomElement(names).toLowerCase()}@${domain}`),
	Date: [moment(new Date()).format('DD/MM/YYYY')],
	Project: projects,
	Product: products,
	Price: prices,
	Address: addresses,
	City: cities,
	Country: countries,
	Phone: phoneNumbers,
	Title: titles,
	Event: events,
	Time: times,
	Username: usernames,
	OrderNumber: orderNumbers,
};

export const placeholderKeysToString = (): string => {
	const keys = Object.keys(replacements);
	return keys.map((key) => `[${key}]`).join(', ');
};

export const replacePlaceholders = (text: string): string => {
	let result = text;

	for (const placeholder of Object.keys(replacements)) {
		const replacement = randomElement(replacements[placeholder]);
		if (placeholder === 'You' || placeholder === 'Them') {
			const yourName = replacement;
			let theirName = randomElement(names);
			while (yourName === theirName) {
				theirName = randomElement(names);
			}
			result = result.replace(new RegExp(`\\[${placeholder}\\]`, 'g'), yourName);
			result = result.replace(new RegExp(`\\[Them\\]`, 'g'), theirName);
		} else if (placeholder === 'Email') {
			const yourName = randomElement(names);
			const yourEmail = `${yourName.toLowerCase()}@${randomElement(emailDomains)}`;
			result = result.replace(new RegExp(`\\[${placeholder}\\]`, 'g'), yourEmail);
		} else {
			result = result.replace(new RegExp(`\\[${placeholder}\\]`, 'g'), replacement);
		}
	}

	return result;
};
