import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRatio1X1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M15 1H1v14h14zM1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M2.5 2.5H6v1H3.5V6h-1zM2.5 13.5H6v-1H3.5V10h-1zM13.5 2.5H10v1h2.5V6h1zM13.5 13.5H10v-1h2.5V10h1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRatio1X1)
const Memo = memo(ForwardRef)
export default Memo
