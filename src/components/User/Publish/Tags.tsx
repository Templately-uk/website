import React from 'react';
import { Controller } from 'react-hook-form';
import { WithContext as ReactTags } from 'react-tag-input';
import styles from '../../styles/tags.module.scss';
import { useFetchTags } from '@/hooks/useFetchTags';

interface Props {
	name: string;
	control: any;
}

const KeyCodes = {
	comma: 188,
	enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags: React.FC<Props> = ({ name, control }) => {
	const { data } = useFetchTags();

	const handleDelete = (i: number, setValue: any, allTags: { id: string; text: string }[]) => {
		const newTags = allTags.filter((tag, index) => index !== i);
		setValue(newTags);
	};

	const handleAddition = (
		tag: { id: string; text: string },
		setValue: any,
		allTags: { id: string; text: string }[],
	) => {
		tag.text = tag.text.toLowerCase();
		const newTags = [...allTags, tag];
		setValue(newTags);
	};

	const handleDrag = (
		tag: { id: string; text: string },
		currPos: number,
		newPos: number,
		setValue: any,
		allTags: { id: string; text: string }[],
	) => {
		const newTags = allTags.slice();
		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);
		setValue(newTags);
	};

	const suggestions = data?.tags.map((tag) => ({ id: tag.name, text: tag.name })) || [];

	return (
		<div className="w-full">
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<ReactTags
						classNames={{
							tags: styles.tags,
							tag: styles.tag,
							tagInput: styles.tagInput,
							suggestions: styles.suggestions,
						}}
						tags={field.value}
						delimiters={delimiters}
						handleDelete={(i) => handleDelete(i, field.onChange, field.value)}
						handleAddition={(tag) => handleAddition(tag, field.onChange, field.value)}
						handleDrag={(tag, currPos, newPos) => handleDrag(tag, currPos, newPos, field.onChange, field.value)}
						suggestions={suggestions}
						autofocus={false}
					/>
				)}
			/>
			<div className="border-none rounded-none" />
		</div>
	);
};

export default Tags;
