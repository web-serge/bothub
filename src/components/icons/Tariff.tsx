import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTariff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <rect width={24} height={24} y={0.5} fill="#222B44" rx={4} />
    <path
      fill="#4785FF"
      d="M11.111 6.224a1 1 0 0 1 1.778 0l1.293 2.508a1 1 0 0 0 .727.529l2.785.454a1 1 0 0 1 .55 1.691l-1.986 2.004a1 1 0 0 0-.278.856l.428 2.789a1 1 0 0 1-1.438 1.044l-2.52-1.268a1 1 0 0 0-.9 0l-2.52 1.268a1 1 0 0 1-1.438-1.044l.428-2.789a1 1 0 0 0-.278-.856l-1.985-2.004a1 1 0 0 1 .55-1.69L9.09 9.26a1 1 0 0 0 .727-.529z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgTariff)
const Memo = memo(ForwardRef)
export default Memo
