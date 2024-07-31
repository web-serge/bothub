import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgInfoBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" ref={ref} {...props}>
    <rect width={30} height={30} fill="#222B44" rx={4} />
    <g clipPath="url(#info-big_svg__a)">
      <path
        fill="#1C64F2"
        d="M14.2 19h1.6v-4.8h-1.6zm.8-6.4a.78.78 0 0 0 .57-.23.77.77 0 0 0 .23-.57.78.78 0 0 0-.23-.57A.77.77 0 0 0 15 11a.78.78 0 0 0-.57.23.77.77 0 0 0-.23.57q0 .34.23.57.231.23.57.23M15 23a7.8 7.8 0 0 1-3.12-.63 8.1 8.1 0 0 1-2.54-1.71 8.1 8.1 0 0 1-1.71-2.54A7.8 7.8 0 0 1 7 15q0-1.66.63-3.12t1.71-2.54a8.1 8.1 0 0 1 2.54-1.71A7.8 7.8 0 0 1 15 7q1.66 0 3.12.63t2.54 1.71 1.71 2.54T23 15t-.63 3.12-1.71 2.54a8.1 8.1 0 0 1-2.54 1.71Q16.66 23 15 23"
      />
    </g>
    <defs>
      <clipPath id="info-big_svg__a">
        <path fill="#fff" d="M7 7h16v16H7z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgInfoBig)
const Memo = memo(ForwardRef)
export default Memo
