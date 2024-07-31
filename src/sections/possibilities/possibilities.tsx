import { Wrapper } from '../../components/wrapper/wrapper.tsx'
import { Cards } from './cards.tsx'

export const Possibilities = () => {
  return (
    <section className={'bg-dark'}>
      <Wrapper>
        <h2 className={'text-6 -translate-y-6 text-center font-semibold md:text-[30px] xl:text-[34px]'}>
          Возможности ChatGPT
        </h2>
        <Cards />
      </Wrapper>
    </section>
  )
}
