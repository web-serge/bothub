import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path stroke="#616D8D" strokeLinecap="round" strokeWidth={1.5} d="m4 4 10 10M4 14 14 4" />
  </svg>
)
const ForwardRef = forwardRef(SvgClose)
const Memo = memo(ForwardRef)
export default Memo
