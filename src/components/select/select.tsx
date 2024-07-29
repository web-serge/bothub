import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, memo, useMemo } from 'react'
import arrow from '../../assets/images/icon/arrow.svg'
import * as SelectPrimitive from '@radix-ui/react-select'

export type Option = {
  label: string
  value: string
}
const optionss = [
  { value: 'RU', label: 'RU' },
  { value: 'EN', label: 'EN' },
  { value: 'ES', label: 'ES' },
  { value: 'DE', label: 'DE' },
]
export type SelectProps = {
  className?: string
  options?: Option[]
  placeholder?: string
} & Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'children'>

const SelectRaw = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>((props, ref) => {
  const { options = optionss, placeholder, ...restProps } = props

  const items = useMemo(
    () =>
      options?.map((option) => {
        return (
          <SelectPrimitive.Item
            key={option.value}
            value={option.value}
            className={'cursor-pointer hover:opacity-70 focus:opacity-70'}
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
        id={'1'}
        ref={ref}
        className={'group mr-[34px] flex items-center rounded-[10px] px-4 py-3.5 focus-visible:outline-primary'}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className={'ml-3 flex items-center transition-[0.3s] group-aria-expanded:scale-[-1]'}>
          <img src={arrow} alt="arrow" />
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
