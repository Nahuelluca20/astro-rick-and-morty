import { useStore } from '@nanostores/react';
import { paginationNumber, changePaginatonNumber } from '../store/paginationStore';
export default function Pagination() {
  const $paginationNumber = useStore(paginationNumber);
  return (
    <div className="flex justify-center py-3">
      <a onClick={() => $paginationNumber > 1 && changePaginatonNumber($paginationNumber - 1)} href={`/page/${$paginationNumber}`} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
      <a onClick={() => changePaginatonNumber($paginationNumber + 1)} href={`/page/${$paginationNumber}`} className="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </div>
  )
}
