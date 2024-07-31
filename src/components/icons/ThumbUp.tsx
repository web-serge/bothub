import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgThumbUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#4785FF"
      d="M1.533 8.908A.533.533 0 0 0 1 9.441v7.82c0 .295.239.533.533.533h3.21V8.908zM19 11.848c0-.675-.363-1.268-.905-1.593.215-.31.33-.677.329-1.054a1.86 1.86 0 0 0-1.858-1.856h-3.921c.12-.544.285-1.36.399-2.216.298-2.224.094-3.458-.64-3.883-.459-.264-.953-.318-1.392-.15-.338.128-.796.446-1.057 1.224l-1.03 2.697C8.401 6.306 6.801 7.66 5.808 8.408v9.622c1.84.644 3.759.97 5.716.97h4.273a1.86 1.86 0 0 0 1.858-1.856c0-.346-.096-.684-.28-.978a1.858 1.858 0 0 0 .719-2.724c.542-.325.905-.917.905-1.593"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgThumbUp)
const Memo = memo(ForwardRef)
export default Memo
