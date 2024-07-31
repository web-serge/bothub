import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgSearchPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      d="M9 2.5a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6-2 2-6-6v-.59l-.81-.8A6.9 6.9 0 0 1 9 16.5a7 7 0 1 1 0-14m-1 3v3H5v2h3v3h2v-3h3v-2h-3v-3z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgSearchPlus)
const Memo = memo(ForwardRef)
export default Memo
