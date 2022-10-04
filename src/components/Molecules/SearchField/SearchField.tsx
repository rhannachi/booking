import clsx from 'clsx'
import { Icon } from '@/components/Atoms'

export type SearchFieldProps = {
  className?: string
}

// TODO add onClick and addon-action
export const SearchField = ({ className = '' }: SearchFieldProps) => {
  return (
    <div className={clsx('flex flex-nowrap justify-between border rounded-3xl pl-3 pr-1 py-1 ', className)}>
      <input
        className="text-gray-700 text-sm focus:outline-none w-full"
        type="text"
        placeholder="Veuillez taper une dresse..."
      />
      <button className="p-1 w-9 h-9 rounded-full bg-cyan-400">
        <Icon icon="search-bold" color="fill-white" size="sm" />
      </button>
    </div>
  )
}
