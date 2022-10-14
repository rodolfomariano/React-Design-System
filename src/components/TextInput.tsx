import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputLeftIconProps {
  children: ReactNode
}

export interface TextInputRightIconProps {
  children: ReactNode
}

export interface TextInputRootProps {
  children: ReactNode
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({children}: TextInputRootProps) {
  return (
    <div
      className='className="w-full h-[46px] flex items-center gap-2 py-2 px-3 rounded bg-gray-800 focus-within:ring-1 ring-yellow-500'
    >
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputLeftIcon({children}: TextInputLeftIconProps) {
  return (
    <Slot className='w-5 h-5 text-gray-500'>
      { children }
    </Slot>
  )
}

TextInputLeftIcon.displayName = 'TextInput.LeftIcon'

function TextInputRightIcon({ children }: TextInputRightIconProps) {
  return (
    <Slot className='w-5 h-5 text-gray-500'>
      { children }
    </Slot>
  )
}

TextInputRightIcon.displayName = 'TextInput.RightIcon'

function TextInputInput(props: TextInputInputProps) {
  return (
      <input className={clsx(
        'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-500 outline-none'
      )}
      {...props}
      />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  LeftIcon: TextInputLeftIcon,
  RightIcon: TextInputRightIcon,
}