import { Chat } from '../features/chat/chat'
import { Wrapper } from '../components/wrapper/wrapper.tsx'
import { Button } from '../components/button/button.tsx'

export const ChatGPT = () => {
  return (
    <section className={'bg-dark bg-bg-grid py-[54px] md:py-[66px] xl:py-[119px]'}>
      <Wrapper className={'flex flex-col items-center justify-between gap-7 xl:flex-row'}>
        <div className={'flex flex-col items-center gap-y-10 xl:max-w-[509px] xl:items-start'}>
          <h1 className={'text-7 md:text-[40px] xl:text-[46px]'}>ChatGPT: ваш умный помощник</h1>
          <span className={'text-center text-sm md:text-base xl:text-left'}>
            Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте
            контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!
          </span>
          <Button>Начать работу</Button>
        </div>
        <Chat />
      </Wrapper>
    </section>
  )
}
