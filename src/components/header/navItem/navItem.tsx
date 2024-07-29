type Props = {
  icon: string
  title: string
  subtitle: string
}

const gradient = 'rounded-[10px] bg-gradient-to-r from-primary to-[#D41CF2] shrink-0 p-2'

export const NavItem = ({ subtitle, title, icon }: Props) => {
  return (
    <li className={'flex items-center gap-3.5'}>
      <div className={gradient}>
        <img src={icon} alt={title} className={'w-5'} />
      </div>
      <div>
        <span className={'block text-nowrap text-sm font-semibold'}>{title}</span>
        <span className={'text-[10px]'}>{subtitle}</span>
      </div>
    </li>
  )
}
