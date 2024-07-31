import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <g fill="#848798" clipPath="url(#info_svg__a)">
      <path
        fillRule="evenodd"
        d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18"
        clipRule="evenodd"
      />
      <path d="M9.351 4.5q.999 0 1.782.284.783.27 1.229.837.459.552.458 1.39 0 .838-.35 1.363a2.15 2.15 0 0 1-.932.784 4.4 4.4 0 0 1-1.283.337l-.135 1.161H8.096l.013-2.052q.85-.081 1.336-.243.5-.175.703-.432a.95.95 0 0 0 .202-.607.97.97 0 0 0-.135-.527.75.75 0 0 0-.378-.324q-.243-.108-.648-.108-.58 0-.918.351-.337.338-.432 1.012l-2.214-.769q.176-.702.607-1.255.446-.567 1.202-.878.77-.324 1.917-.324m-.216 6.899q.607 0 .945.297.351.296.351.837 0 .526-.351.823-.338.297-.945.297-.594 0-.945-.297-.337-.298-.337-.823 0-.54.337-.838.351-.296.945-.296" />
    </g>
    <defs>
      <clipPath id="info_svg__a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgInfo)
const Memo = memo(ForwardRef)
export default Memo
