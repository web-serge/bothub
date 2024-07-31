import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgFree = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} fill="none" ref={ref} {...props}>
    <rect width={50} height={50} y={0.5} fill="url(#free_svg__a)" rx={10} />
    <g clipPath="url(#free_svg__b)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.26 11.642A15 15 0 1 1 30.74 39.36a15 15 0 0 1-11.48-27.718M25 12.5a13 13 0 0 0-8.458 3.128l2.165 2.165a1 1 0 0 1-1.414 1.414l-2.165-2.165a13 13 0 0 0 18.33 18.33l-2.165-2.165a1 1 0 0 1 1.414-1.414l2.165 2.165A13 13 0 0 0 25 12.5m0 4.222a1 1 0 0 1 1 1v2.111h.02c1.191-.037 2.239.667 2.774 1.71a1 1 0 0 1-1.78.913c-.227-.443-.607-.636-.938-.623h-2.114c-.485 0-1.073.481-1.073 1.334 0 .848.588 1.331 1.073 1.331h2.076c1.804 0 3.073 1.606 3.073 3.334s-1.27 3.332-3.073 3.332H26v2.114a1 1 0 1 1-2 0v-2.114h-.02c-1.191.037-2.239-.667-2.774-1.711a1 1 0 0 1 1.78-.912c.227.442.607.636.938.623h2.114c.485 0 1.073-.483 1.073-1.332 0-.851-.588-1.334-1.073-1.334h-2.076c-1.804 0-3.073-1.607-3.073-3.331 0-1.73 1.27-3.334 3.073-3.334H24v-2.11a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="free_svg__a"
        x1={-0.197}
        x2={49.803}
        y1={25.5}
        y2={25.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
      <clipPath id="free_svg__b">
        <path fill="#fff" d="M10 10.5h30v30H10z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgFree)
const Memo = memo(ForwardRef)
export default Memo
