export type PropsCard = {
  title: string
  info: string
}
export const Card = ({ title, info }: PropsCard) => {
  return (
    <li
      className={'bg-custom-radial-top-left max-w-[410px] rounded-lg bg-gray-4 px-4 py-7 md:px-[18px] xl:px-6'}
      role={'listitem'}
    >
      <h3 className={'mb-4 text-[22px] font-semibold'}>{title}</h3>
      <p>{info}</p>
    </li>
  )
}
