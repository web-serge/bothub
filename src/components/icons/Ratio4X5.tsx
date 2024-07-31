import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRatio4X5 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M13 2H3v12h10zM3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M4.5 3.5H7v1H5.5V6h-1zM4.5 12.5H7v-1H5.5V10h-1zM11.5 3.5H9v1h1.5V6h1zM11.5 12.5H9v-1h1.5V10h1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRatio4X5)
const Memo = memo(ForwardRef)
export default Memo
