import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBusinessColored = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={37} fill="none" ref={ref} {...props}>
    <rect width={36} height={36} y={0.5} fill="url(#business-colored_svg__a)" rx={10} />
    <path
      fill="#fff"
      d="M18.833 21.833h-1.666a.836.836 0 0 1-.834-.833h-5.825v3.333c0 .917.75 1.667 1.667 1.667h11.658c.917 0 1.667-.75 1.667-1.667V21h-5.833a.836.836 0 0 1-.834.833m5.834-7.5h-3.334a3.332 3.332 0 1 0-6.666 0h-3.334c-.916 0-1.666.75-1.666 1.667v2.5a1.66 1.66 0 0 0 1.666 1.667h5v-.834c0-.458.375-.833.834-.833h1.666c.459 0 .834.375.834.833v.834h5c.916 0 1.666-.75 1.666-1.667V16c0-.917-.75-1.667-1.666-1.667m-8.334 0c0-.916.75-1.666 1.667-1.666s1.667.75 1.667 1.666h-3.342z"
    />
    <defs>
      <linearGradient
        id="business-colored_svg__a"
        x1={-0.142}
        x2={35.858}
        y1={18.5}
        y2={18.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgBusinessColored)
const Memo = memo(ForwardRef)
export default Memo
