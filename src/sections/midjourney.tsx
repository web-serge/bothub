import pc_planet from '../assets/images/midjourney/pc-planet.png'
import mobile_planet from '../assets/images/midjourney/mobile-planet.png'
import pc_robot from '../assets/images/midjourney/pc-robot.png'
import mobile_robot from '../assets/images/midjourney/mobile-robot.png'
import pc_cyberpunk from '../assets/images/midjourney/pc-cyber.png'
import mobile_cyberpunk from '../assets/images/midjourney/mobile-cyber.png'
import { Wrapper } from '../components/wrapper/wrapper'
import { Button } from '../components/button/button.tsx'

export const Midjourney = () => {
  return (
    <section className={'bg-dark pb-[120px] pt-[86px]'}>
      <Wrapper className={'flex flex-col items-center justify-between gap-x-14 xl:flex-row'}>
        <div className={'relative mb-14 mr-20 xl:mb-0'}>
          <picture>
            <source srcSet={mobile_planet} media="(max-width: 767px)" />
            <source srcSet={pc_planet} media="(min-width: 768px)" />
            <img src={mobile_planet} alt="planet" loading={'lazy'} />
          </picture>
          <picture>
            <source srcSet={mobile_robot} media="(max-width: 767px)" />
            <source srcSet={pc_robot} media="(min-width: 768px)" />
            <img src={mobile_robot} alt="robot" className={'absolute left-[60%] top-[-5%]'} loading={'lazy'} />
          </picture>
          <picture>
            <source srcSet={mobile_cyberpunk} media="(max-width: 767px)" />
            <source srcSet={pc_cyberpunk} media="(min-width: 768px)" />
            <img
              src={mobile_cyberpunk}
              alt="cyberpunk"
              className={'absolute bottom-[-10%] left-[33%]'}
              loading={'lazy'}
            />
          </picture>
        </div>
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
