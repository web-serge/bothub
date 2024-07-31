import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M15.188 2.75h-9a.563.563 0 0 0-.563.563v2.812H2.813a.563.563 0 0 0-.563.563v9a.56.56 0 0 0 .563.562h9a.56.56 0 0 0 .562-.562v-2.813h2.813a.56.56 0 0 0 .562-.562v-9a.563.563 0 0 0-.562-.563m-.563 9h-2.25V6.688a.563.563 0 0 0-.562-.563H6.75v-2.25h7.875z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgCopy)
const Memo = memo(ForwardRef)
export default Memo
