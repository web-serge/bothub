import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPdfBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={46} height={46} fill="none" ref={ref} {...props}>
    <g clipPath="url(#pdf-big_svg__a)">
      <circle cx={23} cy={23} r={23} fill="#1A347C" />
      <path
        fill="#E5252A"
        fillRule="evenodd"
        d="M15.687 8h10.03l8.501 8.86v17.234A3.9 3.9 0 0 1 30.32 38H15.687a3.903 3.903 0 0 1-3.905-3.906V11.906A3.903 3.903 0 0 1 15.687 8"
        clipRule="evenodd"
      />
      <path fill="#000" fillRule="evenodd" d="M25.71 8v8.793h8.508z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M16.122 30.384v-5.48h2.331c.578 0 1.035.157 1.38.48q.517.474.517 1.274c0 .532-.172.96-.517 1.274-.345.323-.802.48-1.38.48h-.929v1.972zm1.402-3.164h.772c.21 0 .375-.045.487-.15a.52.52 0 0 0 .173-.412q-.002-.268-.173-.412c-.112-.105-.277-.15-.487-.15h-.772zm3.403 3.164v-5.48h1.942c.382 0 .742.052 1.08.165a2.9 2.9 0 0 1 .914.487q.406.315.645.855c.15.36.232.772.232 1.237 0 .457-.083.87-.232 1.229q-.239.54-.645.855c-.27.217-.577.374-.915.487a3.4 3.4 0 0 1-1.08.165zm1.372-1.192h.405q.326.001.607-.075.27-.08.517-.247a1.1 1.1 0 0 0 .375-.48q.135-.315.135-.742c0-.293-.045-.54-.135-.75a1.1 1.1 0 0 0-.375-.48 1.8 1.8 0 0 0-.517-.247 2.3 2.3 0 0 0-.607-.075h-.405zm4.146 1.192v-5.48h3.898v1.192h-2.497v.877h1.994v1.184h-1.994v2.227z"
      />
    </g>
    <defs>
      <clipPath id="pdf-big_svg__a">
        <path fill="#fff" d="M0 0h46v46H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgPdfBig)
const Memo = memo(ForwardRef)
export default Memo
