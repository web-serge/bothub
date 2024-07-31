import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgErrorCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <circle cx={12} cy={12} r={12} fill="#FE4242" />
    <path stroke="#fff" strokeLinecap="round" strokeWidth={1.5} d="m7 7.5 10 10m-10 0 10-10" />
  </svg>
)
const ForwardRef = forwardRef(SvgErrorCircle)
const Memo = memo(ForwardRef)
export default Memo
