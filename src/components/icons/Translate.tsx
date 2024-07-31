import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgTranslate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" ref={ref} {...props}>
    <rect width={56} height={56} fill="url(#translate_svg__a)" rx={12} />
    <g fill="#fff" clipPath="url(#translate_svg__b)">
      <path d="m22.167 26.75-.834 2.583H23z" />
      <path d="M38.484 15h-13.42v4.296h3.355v1.718H17.516C16.09 21.014 15 22.13 15 23.59v9.45c0 1.46 1.09 2.578 2.516 2.578h.839V40l5.284-4.381h5.62v-6.014h9.225c1.426 0 2.516-1.117 2.516-2.578v-9.45C41 16.117 39.91 15 38.484 15M24.058 32.096l-.42-1.374h-2.6l-.503 1.374h-2.012l2.767-7.646h2.013l2.768 7.646zm12.749-6.787v1.718c-1.09 0-2.265-.343-3.272-.859-1.006.516-2.18.774-3.354.86l-.084-1.719q.88 0 1.761-.258a5.9 5.9 0 0 1-1.51-2.749h1.762c.251.774.755 1.375 1.342 1.89a4.48 4.48 0 0 0 1.593-3.178h-5.032v-1.718h2.516v-1.719h1.677v1.718h2.768l.084.86c.084 1.804-.587 3.608-1.845 4.897.587.171 1.09.257 1.593.257" />
    </g>
    <defs>
      <linearGradient
        id="translate_svg__a"
        x1={-0.22}
        x2={55.779}
        y1={28}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C64F2" />
        <stop offset={1} stopColor="#D41CF2" />
      </linearGradient>
      <clipPath id="translate_svg__b">
        <path fill="#fff" d="M13 13h30v30H13z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTranslate)
const Memo = memo(ForwardRef)
export default Memo
