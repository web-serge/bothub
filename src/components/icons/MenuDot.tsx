import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMenuDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <circle cx={9} cy={2.5} r={2} fill="#616D8D" />
    <circle cx={9} cy={8.5} r={2} fill="#616D8D" />
    <circle cx={9} cy={14.5} r={2} fill="#616D8D" />
  </svg>
)
const ForwardRef = forwardRef(SvgMenuDot)
const Memo = memo(ForwardRef)
export default Memo
