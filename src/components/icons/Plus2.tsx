import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPlus2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path fill="#fff" d="M8 3v5H3v2h5v5h2v-5h5V8h-5V3z" />
  </svg>
)
const ForwardRef = forwardRef(SvgPlus2)
const Memo = memo(ForwardRef)
export default Memo
