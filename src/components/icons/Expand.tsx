import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      stroke="#616D8D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="m15.75 15.75-4.5-4.5m4.5 4.5v-3.6m0 3.6h-3.6m-9.9-3.6v3.6m0 0h3.6m-3.6 0 4.5-4.5m9-5.4v-3.6m0 0h-3.6m3.6 0-4.5 4.5m-9-.9v-3.6m0 0h3.6m-3.6 0 4.5 4.5"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgExpand)
const Memo = memo(ForwardRef)
export default Memo
