import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgHabr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <g clipPath="url(#habr_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12m-4-19h2.984l.023 4.838.426-.184c.596-.504 1.098-.68 2.047-.714.626-.017.88.007 1.318.156.96.309 1.64.942 1.992 1.875.138.367.156.748.181 3.714L17 18.499h-3.02v-2.705c0-2.665-.007-2.698-.193-3.023-.266-.43-.551-.626-1.003-.673-.77-.081-1.303.168-1.607.771-.144.278-.162.569-.17 2.909a486 486 0 0 1-.029 2.722H8.005z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="habr_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgHabr)
const Memo = memo(ForwardRef)
export default Memo
