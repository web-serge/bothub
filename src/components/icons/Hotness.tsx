import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgHotness = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} fill="none" ref={ref} {...props}>
    <rect width={50} height={50} y={0.5} fill="url(#hotness_svg__a)" rx={10} />
    <g clipPath="url(#hotness_svg__b)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="m22.819 12.234 1.575.945a10.18 10.18 0 0 1 4.35 5.18c.277-.625.607-1.232.913-1.844l1.227 1.226c2.752 2.753 5.366 6.878 5.366 10.884 0 5.373-3.312 8.779-8.612 9.368l-1.738.192.38-1.706c.296-1.335.35-2.208.287-2.819-.075-.769-.44-1.372-.895-1.972-.434-.575-.866-1.152-1.21-1.788-1.42 1.121-1.97 2.134-2.146 2.968-.225 1.067.094 2.158.677 3.323l1.027 2.055-2.282-.254c-3.22-.357-6.393-2.508-7.643-5.647-1.306-3.284-.383-7.257 3.838-10.915 2.8-2.426 4.282-5.572 4.886-9.196m1.665 4.125c-.953 2.675-2.782 5.112-4.915 6.961-3.639 3.154-3.965 6.055-3.15 8.1.606 1.525 1.915 2.779 3.466 3.49a6.2 6.2 0 0 1-.015-2.557c.407-1.933 1.797-3.744 4.467-5.413l1.347-.841.502 1.506c.44 1.32 1.353 2.254 2.067 3.412.785 1.275.934 2.738.774 4.198 3.276-.819 4.723-3.303 4.723-6.59 0-2.777-1.675-5.503-3.337-7.632-.686 1.535-2.13 2.075-3.538 2.78V21.75c0-1.711-.696-3.797-2.391-5.39z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="hotness_svg__a"
        x1={-0.197}
        x2={49.803}
        y1={25.5}
        y2={25.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
      <clipPath id="hotness_svg__b">
        <path fill="#fff" d="M10 10.5h30v30H10z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgHotness)
const Memo = memo(ForwardRef)
export default Memo
