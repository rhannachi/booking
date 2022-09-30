import clsx from 'clsx'
import { Icon, IconProps } from '@/components/Atoms'

export type LoaderProps = Omit<IconProps, 'className' | 'icon'> & {
  className?: string
}

export const Loader = ({ className, size, color }: LoaderProps) => (
  <div className={clsx(className, 'inline-flex items-center')}>
    <Icon icon="loader" size={size} color={color} className="inline-block animate-spin " />
  </div>
)
