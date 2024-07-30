import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import arrow from '../../assets/images/icon/arrow.svg'
import { link } from '../header/header.tsx'

type Props = {
  links: link[]
}

export const Menu = ({ links }: Props) => (
  <NavigationMenu.Root className={'relative flex items-center'} orientation={'vertical'}>
    <NavigationMenu.List className={'ml-6 hidden lg:flex lg:gap-x-[34px]'}>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger className={'group flex items-center justify-between gap-x-2'}>
          <span>Продукты</span>{' '}
          <img src={arrow} alt="arrow" className={'transition-[0.3s] group-aria-expanded:scale-[-1]'} />{' '}
        </NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <ul
            className={
              'absolute left-0 top-[65px] z-10 bg-gray-4 p-3.5 lg:flex lg:w-[700px] lg:flex-wrap lg:gap-10 lg:rounded-[17px]'
            }
          >
            {links.map((link) => {
              return (
                <NavigationMenu.Link className={'flex cursor-pointer items-center gap-3.5'}>
                  <div className={'shrink-0 rounded-[10px] bg-gradient-to-r from-primary to-[#D41CF2] p-2'}>
                    <img src={link.icon} alt={link.title} className={'w-5'} />
                  </div>
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
        <NavigationMenu.Link className={'cursor-pointer'} href={'/'}>
          Пакеты
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link className={'cursor-pointer'} href={'/'}>
          API
        </NavigationMenu.Link>
      </NavigationMenu.Item>{' '}
      <NavigationMenu.Item>
        <NavigationMenu.Link className={'cursor-pointer'} href={'/'}>
          Блог
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.List>
    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
)
