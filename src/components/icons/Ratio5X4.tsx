import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRatio5X4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M15 2H1v12h14zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M2.5 3.5H6v1H3.5V7h-1zM2.5 12.5H6v-1H3.5V9h-1zM13.5 3.5H10v1h2.5V7h1zM13.5 12.5H10v-1h2.5V9h1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRatio5X4)
const Memo = memo(ForwardRef)
export default Memo
