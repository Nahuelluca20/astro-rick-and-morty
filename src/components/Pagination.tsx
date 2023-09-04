import { useStore } from '@nanostores/react';
import { paginationUrl } from '../store/paginationStore';
import {changePaginationUrl} from '../store/paginationStore'
export default function Pagination({url}: {url: string}) {
  const $paginationUrl = useStore(paginationUrl);
  return (
    <div className="flex justify-center py-3">
      <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </a>
      {$paginationUrl}
      <a onClick={() => changePaginationUrl("https://rickandmortyapi.com/api/character?page=3",)}  className="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
      </a>
    </div>
  )
}
