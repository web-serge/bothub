import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowNarrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M7.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 0 1 0 1.414"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowNarrowLeft)
const Memo = memo(ForwardRef)
export default Memo
