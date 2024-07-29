import logo from '../../assets/logo.svg'
import bird from '../../assets/icon/bird.svg'
import { Wrapper } from '../wrapper/wrapper.tsx'
import { FooterLinks } from './footerLinks/footerLinks.tsx'

export const Footer = () => {
  return (
    <footer className={'bg-custom-radial-top-center py-16'}>
      <Wrapper className={'flex flex-col gap-y-9 md:justify-between xl:flex-row'}>
        <div className={'flex flex-col gap-y-3'}>
          <img src={logo} alt="logo" className={'mb-1.5 w-[97px]'} />
          <span>ООО «Ботхаб» ОГРН 1236300016259</span>
          <span>@BotHub 2023</span>
          <span>Пользовательское соглашение</span>
          <img src={bird} alt="bird" className={'w-[87px]'} />
        </div>
        <FooterLinks />
      </Wrapper>
    </footer>
  )
}
