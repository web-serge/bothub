import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowNarrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M14.707 12.15a.9.9 0 0 1 .293.663.9.9 0 0 1-.293.662l-4.005 3.75a1.04 1.04 0 0 1-.708.275c-.266 0-.52-.099-.708-.274l-4.005-3.75a.9.9 0 0 1-.281-.66.9.9 0 0 1 .293-.655c.186-.174.437-.272.7-.274s.515.092.704.263l2.296 2.15V3.438c0-.25.105-.488.293-.663s.442-.275.708-.275.52.099.708.275a.9.9 0 0 1 .293.663V14.3l2.296-2.15c.188-.176.442-.275.708-.275s.52.1.708.275"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowNarrowDown)
const Memo = memo(ForwardRef)
export default Memo
