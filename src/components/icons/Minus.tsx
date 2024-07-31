import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path fill="#fff" d="M9 9H4v2h12V9H9" />
  </svg>
)
const ForwardRef = forwardRef(SvgMinus)
const Memo = memo(ForwardRef)
export default Memo
