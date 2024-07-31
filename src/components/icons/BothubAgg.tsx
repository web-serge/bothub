import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBothubAgg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={37} fill="none" ref={ref} {...props}>
    <rect width={36} height={36} y={0.5} fill="url(#bothub-agg_svg__a)" rx={10} />
    <path
      fill="#fff"
      d="M23 8.5a5.006 5.006 0 0 0-5 5h-2.5A2.5 2.5 0 0 0 13 16v2.5H8v10h10v-5h2.5A2.5 2.5 0 0 0 23 21v-2.5a5 5 0 0 0 0-10m-6.25 18.75h-7.5v-7.5h7.5zm5-6.25c0 .69-.56 1.25-1.25 1.25H18V18.5h-3.75V16c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25zM23 17.25V16a2.5 2.5 0 0 0-2.5-2.5h-1.25A3.75 3.75 0 1 1 23 17.25"
    />
    <defs>
      <linearGradient
        id="bothub-agg_svg__a"
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
const ForwardRef = forwardRef(SvgBothubAgg)
const Memo = memo(ForwardRef)
export default Memo
