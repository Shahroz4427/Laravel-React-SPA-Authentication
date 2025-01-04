import { useState } from "react";

const SortableHeader = ({ name, onSort }) => {
    const [sortOrder, setSortOrder] = useState('asc');

    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
        onSort(newSortOrder, name);
    };

    return (
        // relative  select-none px-4 py-2 text-left text-gray-950 dark:text-white
        <th
            aria-sort={sortOrder}
        >
            <div className="flex items-center justify-between space-x-2">
                <span className="truncate">{name}</span>
                {sortOrder === 'asc' ? (
                    <svg style={{ height: "20px", width: "20px" }}
                        className="cursor-pointer h-5 w-5 text-blue-500 transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        onClick={toggleSortOrder}
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg style={{ height: "20px", width: "20px" }}
                        className="cursor-pointer h-5 w-5 text-blue-500 transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        onClick={toggleSortOrder}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
        </th>
    );
};

export default SortableHeader;
