import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <g clipPath="url(#send_svg__a)">
      <path
        fill="currentColor"
        d="M16.916 3.1c.393-.95-.66-1.87-1.745-1.526l-13.272 4.2C.81 6.119.68 7.42 1.68 7.928l4.237 2.146 3.782-3.31a.98.98 0 0 1 .64-.224.98.98 0 0 1 .634.233.75.75 0 0 1 .266.556.75.75 0 0 1-.255.559l-3.783 3.31 2.454 3.707c.58.877 2.066.76 2.46-.192z"
      />
    </g>
    <defs>
      <clipPath id="send_svg__a">
        <path fill="currentColor" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSend)
const Memo = memo(ForwardRef)
export default Memo
