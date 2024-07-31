import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTgColored = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={37} fill="none" ref={ref} {...props}>
    <rect width={36} height={36} y={0.5} fill="url(#tg-colored_svg__a)" rx={10} />
    <g clipPath="url(#tg-colored_svg__b)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24.48 12.192a1.25 1.25 0 0 1 1.72 1.355L24.31 25.01c-.184 1.106-1.397 1.74-2.412 1.189a49 49 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.437 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.899.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="tg-colored_svg__a"
        x1={-0.142}
        x2={35.858}
        y1={18.5}
        y2={18.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
      <clipPath id="tg-colored_svg__b">
        <path fill="#fff" d="M8 8.5h20v20H8z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTgColored)
const Memo = memo(ForwardRef)
export default Memo
