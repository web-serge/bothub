import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M7.125 11.5V4.369L4.85 6.644 3.625 5.375 8 1l4.375 4.375-1.225 1.269-2.275-2.275V11.5zM2.75 15q-.722 0-1.235-.514A1.7 1.7 0 0 1 1 13.25v-2.625h1.75v2.625h10.5v-2.625H15v2.625q0 .721-.514 1.236A1.68 1.68 0 0 1 13.25 15z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgUpload)
const Memo = memo(ForwardRef)
export default Memo
