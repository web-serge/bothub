import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowNarrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M5.293 7.85A.9.9 0 0 1 5 7.187c0-.248.105-.487.293-.662l4.005-3.75c.188-.176.443-.275.708-.275s.52.099.708.274l4.005 3.75a.9.9 0 0 1 .281.66.9.9 0 0 1-.293.655 1.04 1.04 0 0 1-.7.274 1.04 1.04 0 0 1-.704-.263L11.007 5.7v10.863a.9.9 0 0 1-.293.662 1.04 1.04 0 0 1-.708.275c-.265 0-.52-.099-.708-.275a.9.9 0 0 1-.293-.663V5.7L6.709 7.85A1.04 1.04 0 0 1 6 8.125c-.265 0-.52-.1-.708-.275"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowNarrowUp)
const Memo = memo(ForwardRef)
export default Memo
