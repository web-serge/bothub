import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgEmail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
    <path
      d="M3.6 16C3.16 16 2.7832 15.853 2.4696 15.559C2.156 15.265 1.99947 14.912 2 14.5V5.5C2 5.0875 2.1568 4.73425 2.4704 4.44025C2.784 4.14625 3.16053 3.9995 3.6 4H16.4C16.84 4 17.2168 4.147 17.5304 4.441C17.844 4.735 18.0005 5.088 18 5.5V14.5C18 14.9125 17.8432 15.2657 17.5296 15.5597C17.216 15.8537 16.8395 16.0005 16.4 16H3.6ZM10 10.75L16.4 7V5.5L10 9.25L3.6 5.5V7L10 10.75Z"
      fill="currentColor"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEmail)
const Memo = memo(ForwardRef)
export default Memo
