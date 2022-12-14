import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'full'
  children: string
  variant?: 'outline' | 'solid' | 'link'
  className?: string
}

export function SimpleButton({ size = 'full', children, variant = 'solid', className, ...rest }: SimpleButtonProps) {
  
  return (
    <button className={clsx(
        `
          font-header 
          border-radius
          text-sm
          rounded
          border-[1px]
          border-transparent
          focus:ring-1
          ring-yellow-500
          outline-none
          transition:bg duration-300
        ` ,
        {
          'w-full py-3': size === 'full',
          'px-4 py-2' : size === 'sm',
          'px-8 py-3' : size === 'md',
          'px-12 py-3' : size === 'lg',
          'bg-yellow-500 border-yellow-500 text-gray-900  hover:bg-yellow-600': variant === 'solid',
          'border-[1px] border-yellow-500 text-yellow-500 hover:bg-gray-800': variant === 'outline',
          'border-0 py-0 px-0 text-yellow-500 hover:text-yellow-600 hover:underline': variant === 'link'
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}