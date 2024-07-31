import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgYandex = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <g clipPath="url(#yandex_svg__a)">
      <path
        fill="#FC3F1D"
        d="M0 10C0 4.477 4.476 0 10 0c5.522 0 10 4.477 10 10s-4.478 10-10 10C4.476 20 0 15.523 0 10"
      />
      <path
        fill="#fff"
        d="M11.28 5.666h-.925c-1.694 0-2.585.858-2.585 2.123 0 1.43.616 2.1 1.881 2.959l1.045.704-3.003 4.487H5.45l2.695-4.014c-1.55-1.111-2.42-2.19-2.42-4.015 0-2.288 1.595-3.85 4.62-3.85h3.003v11.868H11.28z"
      />
    </g>
    <defs>
      <clipPath id="yandex_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgYandex)
const Memo = memo(ForwardRef)
export default Memo
