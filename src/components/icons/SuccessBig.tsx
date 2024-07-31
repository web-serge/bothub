import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSuccessBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" ref={ref} {...props}>
    <rect width={30} height={30} fill="#222B44" rx={4} />
    <g clipPath="url(#success-big_svg__a)">
      <path fill="#1ABB34" d="M23 15a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M20.207 11.793a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 1.414-1.414L14 16.586l4.793-4.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="success-big_svg__a">
        <path fill="#fff" d="M7 7h16v16H7z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSuccessBig)
const Memo = memo(ForwardRef)
export default Memo
