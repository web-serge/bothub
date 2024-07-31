import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgCheckSmall = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M12.79 3.734a.87.87 0 0 1 0 1.133l-5.713 6.399a.663.663 0 0 1-1.01 0l-2.858-3.2a.87.87 0 0 1 0-1.132.662.662 0 0 1 1.011 0l2.353 2.632 5.209-5.832a.662.662 0 0 1 1.011 0z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCheckSmall)
const Memo = memo(ForwardRef)
export default Memo
