import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" ref={ref} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M2 4.5h14M2 8.5h14M2 12.5h14" />
  </svg>
)
const ForwardRef = forwardRef(SvgMenu)
const Memo = memo(ForwardRef)
export default Memo
