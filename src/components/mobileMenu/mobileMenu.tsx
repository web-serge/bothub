import * as Accordion from '@radix-ui/react-accordion'
import { link } from '../header/header.tsx'
import { ArrowDown } from '../icons'
import { Button } from '../button/button.tsx'

export const MobileMenu = ({ links }: Props) => (
  <Accordion.Root type={'single'} className="flex flex-col gap-y-7 py-10" collapsible>
    <Accordion.Item value={'1'}>
      <Accordion.Trigger className="group flex w-full items-center justify-between">
        <span>Продукты</span> <ArrowDown className={'transition-[0.3s] group-aria-expanded:scale-[-1]'} />
      </Accordion.Trigger>
      <Accordion.Content>
        <ul className={'mt-3 bg-gray-4 p-3.5 lg:flex lg:w-[700px] lg:flex-wrap lg:gap-10 lg:rounded-[17px]'}>
          {links.map((link) => {
            return (
              <li key={link.title} className={'flex cursor-pointer items-center gap-3.5 py-3'}>
                {link.icon}
                <div>
                  <span className={'block text-nowrap text-sm font-semibold'}>{link.title}</span>
                  <span className={'text-[10px]'}>{link.subtitle}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </Accordion.Content>
    </Accordion.Item>
    <a href="/">Пакеты</a>
    <a href="/">API</a>
    <a href="/">Блог</a>
    <Button className={'w-full sm:w-max md:hidden'}>Авторизация</Button>
  </Accordion.Root>
)

type Props = {
  links: link[]
}
