import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRatoio3X2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M15 3H1v10h14zM1 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M2.5 4.5H5v1H3.5V7h-1zM2.5 11.5H5v-1H3.5V9h-1zM13.5 4.5H11v1h1.5V7h1zM13.5 11.5H11v-1h1.5V9h1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRatoio3X2)
const Memo = memo(ForwardRef)
export default Memo
