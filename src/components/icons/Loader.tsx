import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLoader = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#loader_svg__a)">
      <path
        fill="#fff"
        d="M8 0a.8.8 0 0 0-.8.8v1.6a.8.8 0 0 0 1.6 0V.8A.8.8 0 0 0 8 0m7.2 7.2h-1.6a.8.8 0 1 0 0 1.6h1.6a.8.8 0 1 0 0-1.6M3.2 8a.8.8 0 0 0-.8-.8H.8a.8.8 0 0 0 0 1.6h1.6a.8.8 0 0 0 .8-.8m.176-5.6a.81.81 0 0 0-1.112 1.176l1.152 1.112A.8.8 0 0 0 4 4.912a.8.8 0 0 0 .576-.248.8.8 0 0 0 0-1.128zM12 4.912a.8.8 0 0 0 .552-.224l1.152-1.112a.8.8 0 0 0-1.08-1.176l-1.152 1.136a.8.8 0 0 0 0 1.128.8.8 0 0 0 .528.248M8 12.8a.8.8 0 0 0-.8.8v1.6a.8.8 0 1 0 1.6 0v-1.6a.8.8 0 0 0-.8-.8m4.584-1.488a.8.8 0 1 0-1.112 1.152l1.152 1.136a.8.8 0 0 0 1.128-.016.8.8 0 0 0 0-1.136zm-9.168 0-1.152 1.112a.8.8 0 0 0 0 1.136.8.8 0 0 0 .576.24.8.8 0 0 0 .536-.2l1.152-1.112a.8.8 0 0 0-1.112-1.152z"
      />
    </g>
    <defs>
      <clipPath id="loader_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLoader)
const Memo = memo(ForwardRef)
export default Memo
