import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgDashboard1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#0E0C15" rx={4} />
    <path
      fill="#4785FF"
      d="M5 12a.78.78 0 0 0 .778.778h4.666a.78.78 0 0 0 .778-.778V5.778A.78.78 0 0 0 10.444 5H5.778A.78.78 0 0 0 5 5.778zm0 6.222a.78.78 0 0 0 .778.778h4.666a.78.78 0 0 0 .778-.778v-3.11a.78.78 0 0 0-.778-.779H5.778a.78.78 0 0 0-.778.778zm7.778 0a.78.78 0 0 0 .778.778h4.666a.78.78 0 0 0 .778-.778V12a.78.78 0 0 0-.778-.778h-4.666a.78.78 0 0 0-.778.778zM13.556 5a.78.78 0 0 0-.778.778v3.11a.78.78 0 0 0 .778.779h4.666A.78.78 0 0 0 19 8.889V5.778A.78.78 0 0 0 18.222 5z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgDashboard1)
const Memo = memo(ForwardRef)
export default Memo
