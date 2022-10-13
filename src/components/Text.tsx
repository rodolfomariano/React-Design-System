import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Text({ size = 'md', children, asChild, className = 'text-gray-500' }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={clsx(
      " font-sans", 
      {
        'text-2xs': size === 'sm',
        'text-sm': size === 'md',
        'text-lg': size === 'lg',
      },
      className
    )}
    >
      { children }
    </Component>
  )
}