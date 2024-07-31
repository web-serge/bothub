import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgRatio4X7 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#1C64F2"
      fillRule="evenodd"
      d="M13 1H3v14h10zM3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="#4785FF"
      fillRule="evenodd"
      d="M4.5 2.5H7v1H5.5V5h-1zM4.5 13.5H7v-1H5.5V11h-1zM11.5 2.5H9v1h1.5V5h1zM11.5 13.5H9v-1h1.5V11h1z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgRatio4X7)
const Memo = memo(ForwardRef)
export default Memo
