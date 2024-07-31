import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M5.432 13.997H2.25v-3.181l8.576-8.577a.75.75 0 0 1 1.06 0L14.01 4.36a.75.75 0 0 1 0 1.06zm-3.182 1.5h13.5v1.5H2.25z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEdit)
const Memo = memo(ForwardRef)
export default Memo
