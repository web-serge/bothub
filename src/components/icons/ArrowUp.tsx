import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 10 5-4 5 4"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUp)
const Memo = memo(ForwardRef)
export default Memo
