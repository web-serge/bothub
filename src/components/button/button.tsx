import { ComponentPropsWithoutRef, ElementType } from 'react'
import clsx from 'clsx'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'icon' | 'pure'
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as, fullWidth, variant = 'primary', className, ...restProps } = props
  const Component = as ?? 'button'

  const s = {
    button:
      'font-medium leading-5 text-[15px] cursor-pointer  rounded-lg z-10 disabled:pointer-events-none disabled:bg-gray-2 disabled:text-gray-1 hover:bg-accent-strong  active:bg-accent-strong-down transition-[0.3s]',
    icon: 'p-2.5 bg-primary',
    primary: 'py-2.5 px-[18px] bg-primary',
    fullWidth: 'w-full',
    pure: 'p-1',
  }

  return <Component className={clsx(s[variant], s.button, fullWidth && s.fullWidth, className)} {...restProps} />
}
