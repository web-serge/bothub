import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgEmailCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <g clipPath="url(#email-circle_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12m-6.609-6.725q.393.392.942.392H17q.55 0 .941-.392.393-.392.392-.942v-8q0-.55-.391-.941A1.28 1.28 0 0 0 17 7.5H6.333q-.55 0-.941.391A1.28 1.28 0 0 0 5 8.833v8q0 .55.391.942M17 10.167 11.667 13.5l-5.334-3.333V8.833l5.334 3.334L17 8.833z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="email-circle_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgEmailCircle)
const Memo = memo(ForwardRef)
export default Memo
