import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgFace = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <g clipPath="url(#face_svg__a)">
      <path
        fill="#fff"
        d="M8 .25C3.58.25 0 3.719 0 8s3.58 7.75 8 7.75 8-3.469 8-7.75S12.42.25 8 .25m0 14c-3.558 0-6.452-2.803-6.452-6.25S4.442 1.75 8 1.75 14.452 4.553 14.452 8 11.558 14.25 8 14.25M5.42 7.5c.57 0 1.032-.447 1.032-1s-.462-1-1.033-1c-.57 0-1.032.447-1.032 1s.461 1 1.032 1m5.16 0c.572 0 1.033-.447 1.033-1s-.461-1-1.032-1-1.033.447-1.033 1 .462 1 1.033 1m.13 2.269A3.57 3.57 0 0 1 8 11a3.56 3.56 0 0 1-2.71-1.231.794.794 0 0 0-1.09-.097.736.736 0 0 0-.1 1.056A5.13 5.13 0 0 0 8 12.497a5.13 5.13 0 0 0 3.9-1.769.733.733 0 0 0-.1-1.056.794.794 0 0 0-1.09.097"
      />
    </g>
    <defs>
      <clipPath id="face_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgFace)
const Memo = memo(ForwardRef)
export default Memo
