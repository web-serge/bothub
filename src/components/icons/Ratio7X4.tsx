import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRatio7X4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M15 4H1v8h14zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M13.5 10.5h-2v-1h1v-1h1zM13.5 5.5h-2v1h1v1h1zM2.5 10.5h2v-1h-1v-1h-1zM2.5 5.5h2v1h-1v1h-1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRatio7X4)
const Memo = memo(ForwardRef)
export default Memo
