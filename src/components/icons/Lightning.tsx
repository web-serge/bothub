import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLightning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M7.125.75a.75.75 0 0 0-.72.54l-2.625 9a.75.75 0 0 0 .72.96h2.9l-.645 5.157a.75.75 0 0 0 1.369.51l6-9A.75.75 0 0 0 13.5 6.75h-2.668l1.87-4.987A.75.75 0 0 0 12 .75z"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLightning)
const Memo = memo(ForwardRef)
export default Memo
