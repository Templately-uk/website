import React from 'react';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPrevPage: () => void;
	onNextPage: () => void;
}

const SearchPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrevPage, onNextPage }) => {
	return (
		<div className="flex items-center justify-between">
			{currentPage > 1 && (
				<button className="px-4 py-2 border-2 border-black hover:bg-white" onClick={onPrevPage}>
					Prev
				</button>
			)}
			<div>
				Page {currentPage} of {totalPages}
			</div>
			{currentPage < totalPages && (
				<button className="px-4 py-2 border-2 border-black hover:bg-white" onClick={onNextPage}>
					Next
				</button>
			)}
		</div>
	);
};

export default SearchPagination;
