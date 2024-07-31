import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgUsersBg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M6.4 10.643c.882 0 1.6-.769 1.6-1.714 0-.946-.718-1.715-1.6-1.715s-1.6.769-1.6 1.715c0 .945.718 1.714 1.6 1.714m11.2 0c.883 0 1.6-.769 1.6-1.714 0-.946-.717-1.715-1.6-1.715S16 7.983 16 8.93c0 .945.718 1.714 1.6 1.714m.8.857h-1.6c-.44 0-.838.19-1.128.498 1.008.592 1.723 1.66 1.878 2.93h1.65c.442 0 .8-.383.8-.857v-.857c0-.945-.718-1.714-1.6-1.714m-6.4 0c1.547 0 2.8-1.342 2.8-3s-1.253-3-2.8-3-2.8 1.342-2.8 3 1.253 3 2.8 3m1.92.857h-.207a3.7 3.7 0 0 1-1.713.429c-.615 0-1.19-.161-1.713-.429h-.207c-1.59 0-2.88 1.382-2.88 3.086v.771c0 .71.537 1.286 1.2 1.286h7.2c.662 0 1.2-.576 1.2-1.286v-.771c0-1.704-1.29-3.086-2.88-3.086m-5.592-.359A1.54 1.54 0 0 0 7.2 11.5H5.6c-.882 0-1.6.769-1.6 1.714v.857c0 .475.357.858.8.858h1.648c.157-1.27.872-2.339 1.88-2.93"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUsersBg)
const Memo = memo(ForwardRef)
export default Memo
