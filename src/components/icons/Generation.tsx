import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgGeneration = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="m14.571 9-3.428 3.5h2.286c0 .643-.514 1.5-1.143 1.5H5.429C4.799 14 4 13.143 4 12.5v-1.167H2V12.5C2 14.43 3.538 16 5.429 16h6.857c1.89 0 3.428-1.57 3.428-3.5H18zM12.571 2H5.714c-1.89 0-3.428 1.57-3.428 3.5v.036H0L3.429 9l3.428-3.464H4.571V5.5c0-.643.514-1.5 1.143-1.5H12.5c.63 0 1.5.857 1.5 1.5v1.167h2V5.5C16 3.57 14.462 2 12.571 2"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgGeneration)
const Memo = memo(ForwardRef)
export default Memo
