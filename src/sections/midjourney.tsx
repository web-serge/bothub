import mob_midjourney from '../assets/images/midjourney/mob_midjourney.webp'
import pc_midjourney from '../assets/images/midjourney/pc_midjourney.webp'
import midjourney from '../assets/images/midjourney/midjourney.png'
import { Wrapper } from '../components/wrapper/wrapper'
import { Button } from '../components/button/button.tsx'

export const Midjourney = () => {
  return (
    <section className={'bg-dark pb-[120px] pt-[86px]'}>
      <Wrapper className={'flex flex-col items-center justify-between gap-x-14 xl:flex-row'}>
        <picture className={'relative mb-14 xl:mb-0'}>
          <source srcSet={mob_midjourney} media="(max-width: 1023px)" />
          <source srcSet={pc_midjourney} media="(min-width: 1024px)" />
          <img src={midjourney} alt="midjourney" loading={'lazy'} />
        </picture>
        <div className={'flex max-w-xl flex-col items-center xl:items-start xl:text-left'}>
          <h2 className={'text-6 mb-5 text-center font-semibold md:text-[32px] xl:text-left xl:text-[34px]'}>
            Генерация Изображений Через Midjourney
          </h2>
          <p className={'xl:text-4 mb-5 text-center text-[14px] xl:text-left'}>
            MidJourney - инструмент для создания уникальных изображений. Наши алгоритмы помогут вам воплотить в жизнь
            вашу идею. Начните генерировать изображения с MidJourney прямо сейчас! Кликните на кнопку ниже, чтобы начать
            творить.
          </p>
          <Button>Попробовать Midjourney</Button>
        </div>
      </Wrapper>
    </section>
  )
}
