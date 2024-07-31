import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgGemini = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#112441" rx={12} />
    <path
      fill="url(#gemini_svg__a)"
      d="M20 12.016A8.523 8.523 0 0 0 12.016 20h-.032A8.52 8.52 0 0 0 4 12.016v-.032A8.52 8.52 0 0 0 11.984 4h.032A8.52 8.52 0 0 0 20 11.984z"
    />
    <defs>
      <radialGradient
        id="gemini_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 5.588 10.503)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.067} stopColor="#9168C0" />
        <stop offset={0.343} stopColor="#5684D1" />
        <stop offset={0.672} stopColor="#1BA1E3" />
      </radialGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgGemini)
const Memo = memo(ForwardRef)
export default Memo
