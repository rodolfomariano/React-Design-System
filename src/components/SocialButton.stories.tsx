import { Meta, StoryObj } from '@storybook/react'
import { SocialButton, SocialButtonProps } from './SocialButton'

export default {
  title: 'Components/SocialButton',
  component: SocialButton,
  args: {
    size: 'sm',
    variant: 'solid',
    socialMedia: 'google'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'full'],
      control: {
        type: 'inline-radio'
      }
    },
    variant: {
      options: ['outline', 'solid', 'link'],
      control: {
        type: 'inline-radio'
      }
    },
    socialMedia: {
      options: ['google', 'github', 'discord'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<SocialButtonProps>

export const Default: StoryObj<SocialButtonProps> = {}