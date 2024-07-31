import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBothubAvatar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} fill="none" ref={ref} {...props}>
    <g clipPath="url(#bothub-avatar_svg__a)">
      <g clipPath="url(#bothub-avatar_svg__b)">
        <path
          fill="url(#bothub-avatar_svg__c)"
          stroke="#222B44"
          d="M13.69 1.175 16 1l2.31.174 2.258.515 2.157.846 2.006 1.158 1.81 1.445 1.576 1.698 1.305 1.914 1.005 2.087.683 2.213.345 2.29v2.317l-.345 2.29-.683 2.214-1.005 2.087-1.305 1.914-1.575 1.698-1.811 1.444-2.006 1.159-2.157.846-2.258.516-2.31.173-2.31-.173-2.258-.516-2.157-.846-2.006-1.158-1.81-1.445-1.576-1.698-1.305-1.914-1.005-2.087L.89 19.95l-.345-2.29v-2.317l.345-2.29.683-2.214L2.578 8.75l1.305-1.914 1.575-1.698L7.27 3.694l2.006-1.158 2.157-.846z"
        />
        <mask
          id="bothub-avatar_svg__d"
          width={32}
          height={33}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha"
          }}
        >
          <path
            fill="#121825"
            stroke="#222B44"
            d="M13.69 1.175 16 1l2.31.174 2.258.515 2.157.846 2.006 1.158 1.81 1.445 1.576 1.698 1.305 1.914 1.005 2.087.683 2.213.345 2.29v2.317l-.345 2.29-.683 2.214-1.005 2.087-1.305 1.914-1.575 1.698-1.811 1.444-2.006 1.159-2.157.846-2.258.516-2.31.173-2.31-.173-2.258-.516-2.157-.846-2.006-1.158-1.81-1.445-1.576-1.698-1.305-1.914-1.005-2.087L.89 19.95l-.345-2.29v-2.317l.345-2.29.683-2.214L2.578 8.75l1.305-1.914 1.575-1.698L7.27 3.694l2.006-1.158 2.157-.846z"
          />
        </mask>
        <g mask="url(#bothub-avatar_svg__d)">
          <path
            fill="#fff"
            d="M22.501 15.783V13.78c0-.357-.152-.7-.423-.952a1.5 1.5 0 0 0-1.022-.395h-4.335v-.884a.98.98 0 0 0 .362-.747.98.98 0 0 0-.318-.715A1.13 1.13 0 0 0 16 9.79c-.288 0-.563.107-.766.296a.98.98 0 0 0-.318.715c0 .297.141.563.362.747v.884h-4.335a1.5 1.5 0 0 0-1.022.395 1.3 1.3 0 0 0-.423.952v2.02l-.052.003a.74.74 0 0 0-.477.213.65.65 0 0 0-.194.459v1.347c0 .179.076.35.212.476a.75.75 0 0 0 .51.197v3.369c0 .357.153.7.424.952a1.5 1.5 0 0 0 1.022.395h10.114a1.5 1.5 0 0 0 1.022-.395c.271-.253.423-.595.423-.953v-3.367a.75.75 0 0 0 .511-.198.65.65 0 0 0 .212-.476v-1.306a.64.64 0 0 0-.052-.306c-.146-.329-.459-.407-.67-.426m-10.114.69c0-.743.485-1.346 1.083-1.346s1.084.603 1.084 1.347c0 .743-.486 1.347-1.084 1.347s-1.083-.604-1.083-1.347m6.5 4.042c-.723-.002-5.778 0-5.778 0v-1.347h5.781zm-.36-2.694c-.598 0-1.083-.604-1.083-1.347 0-.744.485-1.348 1.084-1.348.598 0 1.083.604 1.083 1.348 0 .743-.485 1.347-1.083 1.347"
          />
          <g filter="url(#bothub-avatar_svg__e)">
            <path
              fill="#017BFF"
              d="M17.548 32.832c0 7.935-5.172 11.539-25.3 11.539s-38.183-8.074-38.183-16.009 23.484-6.7 43.612-6.7c13.936 6.7 19.871 11.17 19.871 11.17"
            />
          </g>
          <g filter="url(#bothub-avatar_svg__f)">
            <path
              fill="#DB01FF"
              d="M27.79-7.217c9.227-1.134 12.879-.937 13.639 5.218C38.548 4.04 39.938 8.14 30.709 9.274 28.704-.343 10.572 3.164 10.324-.274c-.76-6.156 17.466-6.943 17.466-6.943"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="bothub-avatar_svg__a">
        <path fill="#fff" d="M0 .5h32v32H0z" />
      </clipPath>
      <clipPath id="bothub-avatar_svg__b">
        <path fill="#fff" d="M0 .5h32v32H0z" />
      </clipPath>
      <filter
        id="bothub-avatar_svg__e"
        width={95.484}
        height={54.779}
        x={-61.935}
        y={5.592}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_585_16085" stdDeviation={8} />
      </filter>
      <filter
        id="bothub-avatar_svg__f"
        width={63.13}
        height={49.029}
        x={-5.701}
        y={-23.755}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_585_16085" stdDeviation={8} />
      </filter>
      <linearGradient
        id="bothub-avatar_svg__c"
        x1={16}
        x2={16}
        y1={0.5}
        y2={32.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.153} stopColor="#121825" />
        <stop offset={1} stopColor="#051744" />
      </linearGradient>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgBothubAvatar)
const Memo = memo(ForwardRef)
export default Memo
