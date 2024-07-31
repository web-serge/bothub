import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgUnminimize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M19.5 2A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15A2.5 2.5 0 0 1 4.5 2zM18 4h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M9.121 9.707a1 1 0 0 0-1.517 1.294L5 11a1 1 0 0 0 0 2l2.828-.001-.121.122a1 1 0 0 0 1.414 1.414l1.414-1.414c.271-.271.354-.659.25-1.002a1 1 0 0 0-.25-.998z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUnminimize)
const Memo = memo(ForwardRef)
export default Memo
