import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'
import { Envelope, Lock, Eye } from "phosphor-react"

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.LeftIcon>
          <Envelope />
        </TextInput.LeftIcon>,
        <TextInput.Input placeholder='Type your e-mail address' />
    ]
    
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithOutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='Type your password' type="password" />
    )
  }
}

export const WithRightAndLeftIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <>
        <TextInput.LeftIcon>
          <Lock />
        </TextInput.LeftIcon>
        <TextInput.Input placeholder='Type your password' type="password" />
        <TextInput.RightIcon>
          <button>
            <Eye />
          </button>
        </TextInput.RightIcon>
      </>
    )
  },
}