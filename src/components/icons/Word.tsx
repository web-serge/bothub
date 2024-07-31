import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgWord = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#word_svg__a)">
      <path
        fill="#0263D1"
        d="M6.144 0h8.033l6.8 7.09v13.79A3.124 3.124 0 0 1 17.85 24H6.144a3.123 3.123 0 0 1-3.12-3.12V3.12A3.123 3.123 0 0 1 6.144 0"
      />
      <path fill="#000" fillRule="evenodd" d="M14.167 0v7.035h6.81z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M15.165 12.487h-6.33a.53.53 0 0 1-.53-.526c0-.291.24-.527.53-.527h6.33a.526.526 0 1 1 0 1.053m-2.11 6.329h-4.22a.53.53 0 0 1-.53-.526c0-.291.24-.526.53-.526h4.22a.526.526 0 1 1 0 1.052m2.11-2.11h-6.33a.53.53 0 0 1-.53-.526c0-.29.24-.526.53-.526h6.33a.526.526 0 1 1 0 1.052m0-2.11h-6.33a.53.53 0 0 1-.53-.526c0-.29.24-.526.53-.526h6.33a.526.526 0 1 1 0 1.053"
      />
    </g>
    <defs>
      <clipPath id="word_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgWord)
const Memo = memo(ForwardRef)
export default Memo
