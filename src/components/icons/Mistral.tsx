import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMistral = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} fill="#fff" rx={12} />
    <g clipPath="url(#mistral_svg__a)">
      <path fill="#000" d="M17.727 6h-2.545v2.597h2.545z" />
      <path fill="#F7D046" d="M19 6h-2.546v2.597H19z" />
      <path
        fill="#000"
        d="M7.545 6H5v2.597h2.545zM7.545 8.597H5v2.597h2.545zM7.545 11.194H5v2.597h2.545z"
      />
      <path fill="#000" d="M7.545 13.79H5v2.598h2.545zM7.545 16.388H5v2.597h2.545z" />
      <path fill="#F7D046" d="M8.818 6H6.273v2.597h2.545z" />
      <path fill="#F2A73B" d="M19 8.597h-2.546v2.597H19zM8.818 8.597H6.273v2.597h2.545z" />
      <path fill="#000" d="M15.182 8.597h-2.546v2.597h2.546z" />
      <path fill="#F2A73B" d="M16.455 8.597h-2.546v2.597h2.545zM11.364 8.597H8.818v2.597h2.546z" />
      <path fill="#EE792F" d="M13.91 11.194h-2.546v2.597h2.545z" />
      <path
        fill="#EE792F"
        d="M16.455 11.194h-2.546v2.597h2.545zM11.364 11.194H8.818v2.597h2.546z"
      />
      <path fill="#000" d="M12.636 13.79h-2.545v2.598h2.545z" />
      <path fill="#EB5829" d="M13.91 13.79h-2.546v2.598h2.545z" />
      <path fill="#EE792F" d="M19 11.194h-2.546v2.597H19zM8.818 11.194H6.273v2.597h2.545z" />
      <path fill="#000" d="M17.727 13.79h-2.545v2.598h2.545z" />
      <path fill="#EB5829" d="M19 13.79h-2.546v2.598H19z" />
      <path fill="#000" d="M17.727 16.388h-2.545v2.597h2.545z" />
      <path fill="#EB5829" d="M8.818 13.79H6.273v2.598h2.545z" />
      <path fill="#EA3326" d="M19 16.388h-2.546v2.597H19zM8.818 16.388H6.273v2.597h2.545z" />
    </g>
    <defs>
      <clipPath id="mistral_svg__a">
        <path fill="#fff" d="M5 6h14v13H5z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgMistral)
const Memo = memo(ForwardRef)
export default Memo
