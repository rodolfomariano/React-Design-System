import { Meta, StoryObj } from '@storybook/react'
import { SimpleButton, SimpleButtonProps } from './SimpleButton'

export default {
  title: 'Components/SimpleButton',
  component: SimpleButton,
  args: {
    children: 'Simple Button',
    size: 'full',
    variant: 'solid',
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
    }
  }
} as Meta<SimpleButtonProps>

export const Default: StoryObj<SimpleButtonProps> = {}