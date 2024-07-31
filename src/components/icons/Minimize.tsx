import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMinimize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M19.5 2.5A2.5 2.5 0 0 1 22 5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 20V5a2.5 2.5 0 0 1 2.5-2.5zm-9.5 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMinimize)
const Memo = memo(ForwardRef)
export default Memo
