import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgChecked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} fill="none" ref={ref} {...props}>
    <rect width={50} height={50} y={0.5} fill="url(#checked_svg__a)" rx={10} />
    <path
      fill="#fff"
      d="M36.498 16.998c.67.664.67 1.742 0 2.406L22.785 33.002a1.727 1.727 0 0 1-2.426 0l-6.857-6.799a1.69 1.69 0 0 1 0-2.406 1.727 1.727 0 0 1 2.427 0l5.646 5.593 12.502-12.392a1.727 1.727 0 0 1 2.426 0z"
    />
    <defs>
      <linearGradient
        id="checked_svg__a"
        x1={-0.197}
        x2={49.803}
        y1={25.5}
        y2={25.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgChecked)
const Memo = memo(ForwardRef)
export default Memo
