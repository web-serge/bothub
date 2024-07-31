import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path
      fill="#fff"
      d="M2.778 17q-.735 0-1.256-.523A1.7 1.7 0 0 1 1 15.222V2.778q0-.735.523-1.256A1.7 1.7 0 0 1 2.778 1H9v1.778H2.778v12.444H9V17zm9.778-3.556-1.223-1.288L13.6 9.889H6.333V8.11H13.6l-2.267-2.267 1.223-1.288L17 9z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogout)
const Memo = memo(ForwardRef)
export default Memo
