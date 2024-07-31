import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowUp1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <circle cx={12} cy={12.5} r={12} fill="#fff" />
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M6.22 15.125a1 1 0 0 0 1.405.156L12 11.78l4.375 3.5a1 1 0 1 0 1.25-1.562l-5-4a1 1 0 0 0-1.25 0l-5 4a1 1 0 0 0-.156 1.406"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowUp1)
const Memo = memo(ForwardRef)
export default Memo
