import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgThumbDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" ref={ref} {...props}>
    <path
      fill="#4785FF"
      d="M1.533 11.092A.533.533 0 0 1 1 10.559V2.74c0-.295.239-.533.533-.533h3.21v8.886zM19 8.152c0 .675-.363 1.268-.905 1.593.215.31.33.677.329 1.054a1.86 1.86 0 0 1-1.858 1.856h-3.921c.12.544.285 1.36.399 2.216.298 2.224.094 3.458-.64 3.882-.459.265-.953.319-1.392.152-.338-.13-.796-.447-1.057-1.225l-1.03-2.697c-.523-1.289-2.123-2.643-3.116-3.391V1.97C7.65 1.326 9.568 1 11.525 1h4.273c1.025 0 1.858.833 1.858 1.856 0 .346-.096.684-.28.978a1.858 1.858 0 0 1 .719 2.724c.542.325.905.917.905 1.593"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgThumbDown)
const Memo = memo(ForwardRef)
export default Memo
