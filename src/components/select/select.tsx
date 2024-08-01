import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, memo, ReactNode, useMemo } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ArrowDown } from '../icons'

export type Option = {
  label: string
  value: string
}

const defaultOptions = [
  { value: 'RU', label: 'RU' },
  { value: 'EN', label: 'EN' },
]

export type SelectProps = {
  className?: string
  options?: Option[]
  placeholder?: string
  icon?: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'children'>

const SelectRaw = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>((props, ref) => {
  const { options = defaultOptions, placeholder, icon, ...restProps } = props

  const items = useMemo(
    () =>
      options?.map((option) => {
        return (
          <SelectPrimitive.Item
            key={option.value}
            value={option.value}
            className="cursor-pointer outline-none duration-150 hover:text-primary focus:text-primary"
          >
            <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
          </SelectPrimitive.Item>
        )
      }),
    [options],
  )

  return (
    <SelectPrimitive.Root defaultValue={options[0].value} {...restProps}>
      <SelectPrimitive.Trigger
        ref={ref}
        className="group flex items-center gap-x-1.5 rounded-[10px] outline-none duration-150 hover:text-primary focus:text-primary"
        aria-label={'language selection'}
      >
        {icon}
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="flex items-center transition-transform duration-150 group-aria-expanded:scale-[-1]">
          <ArrowDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position={'popper'}
          className={'w-select rounded-[10px] border border-gray-2 bg-gray-4 px-4 py-3.5'}
          sideOffset={10}
        >
          <SelectPrimitive.Viewport className={'p-1'}>{items}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
})

SelectRaw.displayName = 'Select'

const Select = memo(SelectRaw)

Select.displayName = 'SelectMemo'

export { Select }
