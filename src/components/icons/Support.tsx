import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSupport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" ref={ref} {...props}>
    <rect width={56} height={56} fill="url(#support_svg__a)" rx={12} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M27.976 17.787a5.906 5.906 0 0 0-6.012 5.809v8.119a1.857 1.857 0 0 1-1.857 1.857h-2.321A2.786 2.786 0 0 1 15 30.786v-3.714a2.786 2.786 0 0 1 2.786-2.786h1.393v-.724A8.69 8.69 0 0 1 28 15.001a8.693 8.693 0 0 1 8.821 8.561v.724h1.393A2.786 2.786 0 0 1 41 27.072v3.714a2.786 2.786 0 0 1-2.786 2.786h-1.393v.928a5.106 5.106 0 0 1-4.531 5.076A2.79 2.79 0 0 1 29.857 41h-2.786a2.786 2.786 0 0 1 0-5.571h2.786a2.78 2.78 0 0 1 2.377 1.333 2.32 2.32 0 0 0 1.802-2.262V23.594a5.904 5.904 0 0 0-6.06-5.807"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="support_svg__a"
        x1={-0.22}
        x2={55.779}
        y1={28}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgSupport)
const Memo = memo(ForwardRef)
export default Memo
