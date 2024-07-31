import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPdf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#pdf_svg__a)">
      <path
        fill="#E5252A"
        fillRule="evenodd"
        d="M6.15 0h8.024l6.8 7.088v13.788A3.12 3.12 0 0 1 17.857 24H6.15a3.12 3.12 0 0 1-3.124-3.124V3.124A3.12 3.12 0 0 1 6.15 0"
        clipRule="evenodd"
      />
      <path fill="#000" fillRule="evenodd" d="M14.168 0v7.034h6.807z" clipRule="evenodd" />
      <path
        fill="#fff"
        d="M6.498 17.907v-4.384h1.865q.691-.002 1.103.384.414.38.414 1.02t-.414 1.019q-.412.385-1.103.384h-.744v1.577zm1.121-2.53h.618c.168 0 .3-.037.39-.12a.41.41 0 0 0 .138-.33.41.41 0 0 0-.138-.33c-.09-.084-.222-.12-.39-.12h-.618zm2.723 2.53v-4.384h1.553q.459-.002.864.132c.27.09.515.216.731.39q.325.252.516.684c.12.288.186.617.186.99 0 .365-.066.695-.186.983q-.19.43-.516.683c-.216.174-.462.3-.731.39q-.405.134-.864.132zm1.097-.954h.324c.174 0 .336-.017.486-.06q.216-.062.414-.197a.9.9 0 0 0 .3-.384 1.5 1.5 0 0 0 .107-.594 1.5 1.5 0 0 0-.107-.6.9.9 0 0 0-.3-.383 1.5 1.5 0 0 0-.414-.198 1.8 1.8 0 0 0-.486-.06h-.324zm3.317.954v-4.384h3.118v.954h-1.997v.701h1.595v.948h-1.595v1.781z"
      />
    </g>
    <defs>
      <clipPath id="pdf_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgPdf)
const Memo = memo(ForwardRef)
export default Memo
