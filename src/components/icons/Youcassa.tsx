import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgYoucassa = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M5.104 8.972a6.29 6.29 0 0 1 6.3-6.272c3.469 0 6.34 2.831 6.3 6.3 0 3.469-2.831 6.3-6.3 6.3a6.29 6.29 0 0 1-6.3-6.272v4.677H2.87L0 4.535h5.104zM9.05 9c0 1.276 1.077 2.353 2.353 2.353A2.357 2.357 0 0 0 13.756 9c0-1.276-1.076-2.353-2.352-2.353S9.05 7.724 9.05 9"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgYoucassa)
const Memo = memo(ForwardRef)
export default Memo
