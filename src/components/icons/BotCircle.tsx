import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBotCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" ref={ref} {...props}>
    <g clipPath="url(#bot-circle_svg__a)">
      <path
        fill="#616D8D"
        fillRule="evenodd"
        d="M12 24.5c6.627 0 12-5.373 12-12S18.627.5 12 .5 0 5.873 0 12.5s5.373 12 12 12m6.298-14.838v2.09c.205.02.508.101.65.444q.061.155.05.32v1.362a.704.704 0 0 1-.7.703v3.514c0 .372-.147.73-.41.993a1.4 1.4 0 0 1-.99.412H7.1c-.372 0-.728-.148-.99-.412a1.4 1.4 0 0 1-.41-.994v-3.513a.7.7 0 0 1-.7-.703v-1.405a.704.704 0 0 1 .65-.701l.05-.004V9.662c0-.373.147-.73.41-.994.262-.264.618-.412.99-.412h4.2v-.922a1.05 1.05 0 0 1-.043-1.525 1.048 1.048 0 0 1 1.792.745c0 .31-.137.588-.35.78v.922h4.2c.37 0 .727.148.99.412.262.263.41.62.41.994M9.55 11.067c-.58 0-1.05.63-1.05 1.406s.47 1.405 1.05 1.405 1.05-.63 1.05-1.405c0-.776-.47-1.406-1.05-1.406M9.2 16.69s4.898-.002 5.598 0l.003-1.405c-.7-.002-5.6 0-5.6 0zm4.2-4.216c0 .775.47 1.405 1.05 1.405s1.05-.63 1.05-1.405c0-.776-.47-1.406-1.05-1.406s-1.05.63-1.05 1.406"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="bot-circle_svg__a">
        <path fill="#fff" d="M0 .5h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgBotCircle)
const Memo = memo(ForwardRef)
export default Memo
