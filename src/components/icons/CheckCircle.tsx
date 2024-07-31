import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <circle cx={12} cy={12} r={12} fill="#1C64F2" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.799 8.204a.7.7 0 0 1 0 .983l-6.537 6.61a.684.684 0 0 1-.973 0l-3.096-3.131a.7.7 0 0 1 .009-.976.685.685 0 0 1 .964-.008l2.61 2.639 6.05-6.117a.684.684 0 0 1 .973 0"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckCircle)
const Memo = memo(ForwardRef)
export default Memo
