import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Heading({ size = 'md', children, asChild, className = 'text-gray-100' }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component className={clsx(
      " font-header", 
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      },
      className
    )}
    >
      { children }
    </Component>
  )
}