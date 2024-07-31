import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgFilters = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M2 3.109c0-.294.123-.576.342-.784S2.857 2 3.167 2h11.666c.31 0 .607.117.825.325.22.208.342.49.342.784V4.65c0 .392-.164.768-.456 1.045L11.334 9.7v5.488a.8.8 0 0 1-.109.396.83.83 0 0 1-.297.296.89.89 0 0 1-.833.035l-2.89-1.373a.96.96 0 0 1-.393-.341.9.9 0 0 1-.145-.486V9.7L2.456 5.696A1.44 1.44 0 0 1 2 4.651z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgFilters)
const Memo = memo(ForwardRef)
export default Memo
