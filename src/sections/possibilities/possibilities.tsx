import { Wrapper } from '../../components/wrapper/wrapper.tsx'
import { Cards } from './cards.tsx'

export const Possibilities = () => {
  return (
    <section className={'bg-dark'}>
      <Wrapper>
        <h2 className={'-translate-y-10 text-center text-[34px] font-semibold'}>Возможности ChatGPT</h2>
        <Cards />
      </Wrapper>
    </section>
  )
}
