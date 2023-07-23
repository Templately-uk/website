import { useFetchMetrics } from '@/hooks/useFetchMetrics';
import { Categories } from '@/types/Category';
import { capitaliseFirstLetter } from '@/utils/stringUtils';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

interface Props {
	register: any;
	errors: any;
	control: any;
	name: string;
}
const CategorySelect: React.FC<Props> = ({ name, control }) => {
	const { data } = useFetchMetrics();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<RadioGroup value={field.value} onChange={field.onChange}>
					{data &&
						data.categories.map((category, index) => (
							<RadioGroup.Option key={index} value={category.category.toLowerCase()}>
								{({ checked }) => (
									<Select
										checked={checked}
										value={category.category.toLowerCase()}
										description={Categories[category.category]}
									/>
								)}
							</RadioGroup.Option>
						))}
				</RadioGroup>
			)}
			rules={{
				required: true,
			}}
		/>
	);
};

const Select: React.FC<{ checked: boolean; value: string; description: string }> = ({
	checked,
	value,
	description,
}) => {
	const [hover, setHover] = useState(false);
	// eslint-disable-next-line no-undef
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const debounceHover = (isHovered: boolean) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			setHover(isHovered);
		}, 1000);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return (
		<div
			onMouseEnter={() => debounceHover(true)}
			onMouseLeave={() => debounceHover(false)}
			className={classNames(
				'relative p-2 border-2 border-black mb-1',
				checked ? 'font-bold shadow-[-2px_2px_0_0_#000]' : '',
			)}
		>
			<div>{capitaliseFirstLetter(value)}</div>
			{hover && (
				<div className="absolute top-0 z-30 p-4 font-serif font-base text-xs text-white bg-black/70 w-[250px] -left-[255px] border-2 border-black">
					{description}
				</div>
			)}
		</div>
	);
};

export default CategorySelect;
