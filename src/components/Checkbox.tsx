import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from "phosphor-react"

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {

  return (
    <CheckboxRadix.Root className="w-6 h-6 bg-gray-800 border-[1px] border-gray-500 rounded flex justify-center items-center" {...props}>
      <CheckboxRadix.Indicator asChild>
        <Check size={16} className="text-yellow-500" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  )
}