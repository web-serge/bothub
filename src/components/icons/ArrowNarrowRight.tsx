import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowNarrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#616D8D"
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowNarrowRight)
const Memo = memo(ForwardRef)
export default Memo
