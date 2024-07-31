import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgErrorBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" ref={ref} {...props}>
    <rect width={30} height={30} fill="#222B44" rx={4} />
    <g clipPath="url(#error-big_svg__a)">
      <path
        fill="#FE4242"
        d="M15 7c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8m0 8.8c-.44 0-.8-.36-.8-.8v-3.2c0-.44.36-.8.8-.8s.8.36.8.8V15c0 .44-.36.8-.8.8m.8 3.2h-1.6v-1.6h1.6z"
      />
    </g>
    <defs>
      <clipPath id="error-big_svg__a">
        <path fill="#fff" d="M7 7h16v16H7z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgErrorBig)
const Memo = memo(ForwardRef)
export default Memo
