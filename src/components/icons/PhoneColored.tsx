import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPhoneColored = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill="none" ref={ref} {...props}>
    <rect width={36} height={36} fill="url(#phone-colored_svg__a)" rx={10} />
    <g clipPath="url(#phone-colored_svg__b)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M21.793 25.944c-1.2-.044-4.6-.514-8.162-4.075-3.561-3.561-4.03-6.961-4.075-8.162-.067-1.83 1.335-3.608 2.954-4.302a1.23 1.23 0 0 1 1.204.133c1.333.971 2.253 2.441 3.044 3.597a1.253 1.253 0 0 1-.214 1.655l-1.626 1.208a.4.4 0 0 0-.118.513c.368.669 1.023 1.666 1.773 2.416.751.75 1.794 1.448 2.51 1.858a.4.4 0 0 0 .537-.135l1.058-1.61a1.25 1.25 0 0 1 1.714-.277c1.172.811 2.54 1.715 3.542 2.998a1.23 1.23 0 0 1 .158 1.237c-.698 1.628-2.463 3.014-4.299 2.946"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="phone-colored_svg__a"
        x1={-0.142}
        x2={35.858}
        y1={18}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
      <clipPath id="phone-colored_svg__b">
        <path fill="#fff" d="M8 7.5h20v20H8z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgPhoneColored)
const Memo = memo(ForwardRef)
export default Memo
