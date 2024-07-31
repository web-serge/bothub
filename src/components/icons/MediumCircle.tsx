import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMediumCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <g clipPath="url(#medium-circle_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12M6.51 9.316q.045.108.032.224v5.568a.62.62 0 0 1-.177.552L5 17.265v.211h3.872v-.211L7.506 15.66a.65.65 0 0 1-.188-.553v-4.814l3.4 7.183h.393l2.92-7.183v5.726c0 .152 0 .182-.103.282l-1.05.987v.212h5.098v-.212l-1.014-.964a.3.3 0 0 1-.098-.126.3.3 0 0 1-.017-.157V8.957a.3.3 0 0 1 .017-.156.3.3 0 0 1 .098-.126L18 7.712V7.5h-3.593l-2.561 6.19L8.932 7.5H5.164v.212l1.214 1.417a.5.5 0 0 1 .133.187"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="medium-circle_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMediumCircle)
const Memo = memo(ForwardRef)
export default Memo
