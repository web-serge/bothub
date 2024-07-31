export type PropsCard = {
  title: string
  info: string
}
export const Card = ({ title, info }: PropsCard) => {
  return (
    <li
      className={'w-full max-w-[410px] rounded-lg bg-gray-4 bg-custom-radial-top-left px-4 py-7 md:px-[18px] xl:px-6'}
      role={'listitem'}
    >
      <h3 className={'mb-4 text-[18px] font-semibold md:text-[20px] xl:text-[22px]'}>{title}</h3>
      <p className={'text-[14px] xl:text-[16px]'}>{info}</p>
    </li>
  )
}
