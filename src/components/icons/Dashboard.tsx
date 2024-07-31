import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgDashboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M9.889 6.333V1H17v5.333zM1 9.89V1h7.111v8.889zM9.889 17V8.111H17V17zM1 17v-5.333h7.111V17z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDashboard)
const Memo = memo(ForwardRef)
export default Memo
