import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgLang = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} ref={ref} {...props}>
    <g clipPath="url(#lang_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.499 11.961A9 9 0 0 0 18 9a9 9 0 0 0-.53-3.042C16.22 2.488 12.896 0 9 0S1.78 2.488.53 5.958A9 9 0 0 0 0 9c0 1.037.178 2.066.53 3.042C1.78 15.512 5.104 18 9 18s7.22-2.488 8.47-5.958a1 1 0 0 0 .029-.081M9 16.711c-.343 0-.895-.622-1.358-2.006a14 14 0 0 1-.53-2.276h3.778c-.13.837-.309 1.606-.531 2.276-.463 1.384-1.016 2.005-1.358 2.005zm-2.044-5.572a24 24 0 0 1 0-4.278h4.088a24 24 0 0 1 0 4.278zM1.288 9c0-.742.106-1.46.304-2.14H5.66a25 25 0 0 0 0 4.28H1.593A7.7 7.7 0 0 1 1.29 9zM9 1.29c.343 0 .895.62 1.358 2.005.222.669.4 1.439.53 2.276H7.11c.13-.838.309-1.607.531-2.276.463-1.384 1.016-2.005 1.358-2.005zm3.339 5.57h4.068a7.7 7.7 0 0 1 0 4.28h-4.068a25 25 0 0 0 0-4.28m3.564-1.29h-3.712c-.229-1.582-.623-3.002-1.175-4.012a7.74 7.74 0 0 1 4.887 4.012M6.984 1.558c-.553 1.01-.946 2.43-1.175 4.012H2.096a7.74 7.74 0 0 1 4.887-4.012zM2.097 12.43h3.712c.229 1.582.623 3.002 1.175 4.012a7.75 7.75 0 0 1-4.887-4.012m8.919 4.012c.553-1.01.946-2.43 1.175-4.012h3.712a7.75 7.75 0 0 1-4.887 4.012"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="lang_svg__a">
        <path fill="currentColor" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLang)
const Memo = memo(ForwardRef)
export default Memo
