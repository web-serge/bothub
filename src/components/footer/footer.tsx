import { Wrapper } from '../wrapper/wrapper.tsx'
import { FooterLinks } from './footerLinks/footerLinks.tsx'
import { Alri, LogoLight } from '../icons'

export const Footer = () => {
  return (
    <footer className={'bg-custom-radial-top-center py-16'}>
      <Wrapper className={'flex flex-col gap-y-9 md:justify-between xl:flex-row'}>
        <div className={'flex flex-col gap-y-3'}>
          <LogoLight className={'mb-1.5'} />
          <span>ООО «Ботхаб» ОГРН 1236300016259</span>
          <span>@BotHub 2023</span>
          <span>Пользовательское соглашение</span>
          <Alri />
        </div>
        <FooterLinks />
      </Wrapper>
    </footer>
  )
}
