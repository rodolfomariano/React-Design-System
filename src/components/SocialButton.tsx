import clsx from 'clsx'
import { GithubLogo, GoogleLogo, DiscordLogo } from "phosphor-react"

export interface SocialButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'full'
  variant?: 'outline' | 'solid' | 'link'
  socialMedia?: 'google' | 'github' | 'discord'
}

export function SocialButton({ size = 'sm', variant = 'solid', socialMedia = 'google' }: SocialButtonProps) {
  
  return (
    <button className={clsx(
        `
          min-w-[122px]
          font-header 
          border-radius
          text-xs
          rounded
          border-[1px]
          border-transparent
          focus:ring-1
          ring-yellow-500
          outline-none
          flex
          items-center
          justify-center
          gap-1
          transition:bg duration-300
        `,
        {
          'w-full py-3': size === 'full',
          'px-4 py-2' : size === 'sm',
          'px-8 py-3' : size === 'md',
          'px-12 py-3' : size === 'lg',
          'bg-gray-800 border-gray-800 hover:bg-gray-900 text-gray-500': variant === 'solid',
          'border-[1px] border-yellow-500 text-yellow-500 hover:bg-gray-800': variant === 'outline',
          'border-0 py-0 px-0 text-yellow-500 hover:text-yellow-600 hover:underline': variant === 'link'
        }
      )}
    >
      { socialMedia === 'github' 
        ? (
           <>
            <GithubLogo weight="regular" size={20} /> Github
          </>  
          )
        : socialMedia === 'google' 
          ? (
            <>
              <GoogleLogo weight="regular" size={20} /> Google
            </>
          )
        : (
          <>
            <DiscordLogo weight="regular" size={20} /> Discord
          </>
        )
      }
    </button>
  )
}