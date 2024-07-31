import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgXlsBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={46} fill="none" ref={ref} {...props}>
    <g clipPath="url(#xls-big_svg__a)">
      <circle cx={23} cy={23} r={23} fill="#1A347C" />
      <path
        fill="#00733B"
        fillRule="evenodd"
        d="M15.68 8h10.04l8.497 8.869V34.09A3.9 3.9 0 0 1 30.32 38H15.681a3.91 3.91 0 0 1-3.898-3.909V11.898A3.906 3.906 0 0 1 15.68 8"
        clipRule="evenodd"
      />
      <path fill="#000" fillRule="evenodd" d="M25.71 8v8.792h8.507z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M21.111 29.843h-1.456l-.996-1.675-.996 1.675h-1.468l1.73-2.912-1.522-2.53h1.468l.788 1.314.777-1.314h1.467l-1.51 2.54zm.515 0v-5.442h1.39v4.26h2.365v1.182zm6.055.066c-.548 0-1.03-.175-1.446-.515-.405-.328-.635-.744-.667-1.237l1.193-.35c.033.262.142.492.329.668a.97.97 0 0 0 .656.262.87.87 0 0 0 .493-.131.42.42 0 0 0 .186-.35.4.4 0 0 0-.153-.307 1.4 1.4 0 0 0-.383-.197 5 5 0 0 0-.526-.153 3.7 3.7 0 0 1-.58-.208 2 2 0 0 1-.526-.296c-.164-.11-.284-.274-.383-.482a1.6 1.6 0 0 1-.153-.712c0-.448.186-.82.57-1.116.382-.307.842-.45 1.379-.45.536 0 1.007.132 1.401.384.394.263.646.602.745 1.018l-1.248.526a1.1 1.1 0 0 0-.318-.559.88.88 0 0 0-.58-.208.8.8 0 0 0-.416.11.32.32 0 0 0-.143.285c0 .11.066.208.197.284.132.066.307.12.504.153s.416.088.646.165c.24.087.449.175.657.295.197.11.361.296.493.537.142.252.208.547.208.887 0 .503-.197.92-.592 1.226-.394.307-.908.47-1.543.47"
      />
    </g>
    <defs>
      <clipPath id="xls-big_svg__a">
        <path fill="#fff" d="M0 0h46v46H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgXlsBig)
const Memo = memo(ForwardRef)
export default Memo
