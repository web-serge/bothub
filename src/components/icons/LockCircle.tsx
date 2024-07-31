import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLockCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <g clipPath="url(#lock-circle_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12M10.765 8.092A1.68 1.68 0 0 1 12 7.536c.463 0 .907.2 1.235.556.327.356.511.84.511 1.343v1.209h-3.492V9.435c0-.503.184-.987.511-1.343m-1.463 2.552V9.435c0-.778.284-1.525.79-2.075A2.6 2.6 0 0 1 12 6.5c.716 0 1.402.31 1.908.86s.79 1.297.79 2.075v1.209h.635c.442 0 .866.19 1.179.53.312.34.488.802.488 1.283v4.23c0 .48-.176.942-.488 1.282-.313.34-.737.531-1.179.531H8.667c-.442 0-.866-.191-1.179-.531A1.9 1.9 0 0 1 7 16.687v-4.23c0-.481.176-.942.488-1.282.313-.34.737-.531 1.179-.531zm3.09 2.594a.63.63 0 0 1 .164.428v1.812c0 .16-.059.314-.163.428a.53.53 0 0 1-.393.177.53.53 0 0 1-.393-.177.63.63 0 0 1-.163-.428v-1.812c0-.16.059-.315.163-.428a.53.53 0 0 1 .393-.177c.147 0 .289.064.393.177"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="lock-circle_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLockCircle)
const Memo = memo(ForwardRef)
export default Memo
