import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgStop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <g stroke="#616D8D" strokeLinecap="round" strokeWidth={1.5} clipPath="url(#stop_svg__a)">
      <path strokeLinejoin="round" d="M5.8 1 1 5.925V12.2L5.8 17h6.4l4.8-4.8V5.925L12.2 1z" />
      <path d="M12.2 9H5.8" />
    </g>
    <defs>
      <clipPath id="stop_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgStop)
const Memo = memo(ForwardRef)
export default Memo
