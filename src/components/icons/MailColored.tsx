import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMailColored = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={37} fill="none" ref={ref} {...props}>
    <rect width={36} height={36} y={0.5} fill="url(#mail-colored_svg__a)" rx={10} />
    <path
      fill="#fff"
      d="M11.6 24q-.66 0-1.13-.441A1.4 1.4 0 0 1 10 22.5v-9q0-.619.47-1.06A1.6 1.6 0 0 1 11.6 12h12.8q.66 0 1.13.441T26 13.5v9q0 .62-.47 1.06a1.6 1.6 0 0 1-1.13.44zm6.4-5.25L24.4 15v-1.5L18 17.25l-6.4-3.75V15z"
    />
    <defs>
      <linearGradient
        id="mail-colored_svg__a"
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
const ForwardRef = forwardRef(SvgMailColored)
const Memo = memo(ForwardRef)
export default Memo
