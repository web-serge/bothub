import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { link } from '../header/header.tsx'
import { ArrowDown } from '../icons'

type Props = {
  links: link[]
}

export const Navigation = ({ links }: Props) => (
  <NavigationMenu.Root className={'relative flex items-center'}>
    <NavigationMenu.List className={'ml-6 hidden lg:flex lg:gap-x-[34px]'}>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger className="group flex items-center justify-between gap-x-2 duration-150 hover:text-primary">
          <span>Продукты</span> <ArrowDown className={'duration-150 group-aria-expanded:scale-[-1]'} />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content asChild>
          <ul className="absolute left-0 top-[65px] z-10 bg-gray-4 p-3.5 lg:flex lg:w-[700px] lg:flex-wrap lg:gap-10 lg:rounded-[17px]">
            {links.map((link) => {
              return (
                <NavigationMenu.Link key={link.title} className="flex cursor-pointer items-center gap-3.5">
                  {link.icon}
                  <div>
                    <span className={'block text-nowrap text-sm font-semibold'}>{link.title}</span>
                    <span className={'text-[10px]'}>{link.subtitle}</span>
                  </div>
                </NavigationMenu.Link>
              )
            })}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link className="cursor-pointer duration-150 hover:text-primary" href={'/'}>
          Пакеты
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link className="cursor-pointer duration-150 hover:text-primary" href={'/'}>
          API
        </NavigationMenu.Link>
      </NavigationMenu.Item>{' '}
      <NavigationMenu.Item>
        <NavigationMenu.Link className="cursor-pointer duration-150 hover:text-primary" href={'/'}>
          Блог
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
)
