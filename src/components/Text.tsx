import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Text({ size = 'md', children, asChild }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={clsx(
      "text-gray-500 font-sans", 
      {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
      }
    )}
    >
      { children }
    </Component>
  )
}