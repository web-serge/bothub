import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLinks = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} fill="none" ref={ref} {...props}>
    <rect width={50} height={50} y={0.5} fill="url(#links_svg__a)" rx={10} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M21.332 24.332a3.42 3.42 0 0 1 2.418-1.001zm-3.75 3.75 3.75-3.75zm0 0a3.42 3.42 0 0 0 4.836 4.836l1.875-1.875a1 1 0 0 1 1.414 1.414l-1.875 1.875a5.42 5.42 0 0 1-7.664-7.664l3.75-3.75a5.42 5.42 0 0 1 7.664 0 1 1 0 1 1-1.414 1.414 3.42 3.42 0 0 0-2.418-1.001"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m27.582 18.082-1.875 1.875a1 1 0 0 1-1.414-1.414l1.875-1.875a5.42 5.42 0 0 1 7.664 7.664l-3.75 3.75a5.42 5.42 0 0 1-7.664 0 1 1 0 1 1 1.414-1.414 3.42 3.42 0 0 0 4.836 0m0 0 3.75-3.75a3.42 3.42 0 0 0-4.836-4.836"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="links_svg__a"
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
const ForwardRef = forwardRef(SvgLinks)
const Memo = memo(ForwardRef)
export default Memo
