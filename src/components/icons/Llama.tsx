import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgLlama = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <g clipPath="url(#llama_svg__a)">
      <path
        fill="#5282FF"
        d="M19.656 21.24A11.98 11.98 0 0 0 24 12C24 5.447 18.747.12 12.222.002A11.974 11.974 0 0 0 0 11.944a11.98 11.98 0 0 0 4.344 9.297z"
      />
      <path
        fill="#141DF9"
        d="M19.656 21.24A11.98 11.98 0 0 0 24 12c0-.84-.087-1.66-.251-2.452l-4.571-4.571-1.66 2.784a2 2 0 0 1-.062.25q.05-.003.1-.003l-4.972 7.81z"
      />
      <path
        fill="#fff"
        d="M8.372 8.528c.664-.663.407-1.997-.574-2.977-.98-.981-2.314-1.238-2.977-.574-.664.664-.407 1.997.573 2.978.981.98 2.314 1.237 2.978.573"
      />
      <path
        fill="#E9EDF5"
        d="M18.602 7.956c.98-.981 1.237-2.314.573-2.978-.663-.664-1.997-.407-2.977.574-.981.98-1.238 2.314-.574 2.978.664.663 1.997.406 2.978-.574"
      />
      <path
        fill="#E9EDF5"
        d="M19.804 10.257a2.25 2.25 0 0 0-2.348-2.246 2.249 2.249 0 0 0-3.346-2.567 2.25 2.25 0 0 0-4.22 0A2.249 2.249 0 0 0 6.544 8.01l-.1-.002a2.249 2.249 0 0 0-1.094 4.213 2.248 2.248 0 0 0 0 3.93 2.248 2.248 0 0 0 0 3.93 2.26 2.26 0 0 0-1.006 1.16A11.95 11.95 0 0 0 12 24c2.91 0 5.578-1.036 7.656-2.759a2.26 2.26 0 0 0-1.006-1.16 2.248 2.248 0 0 0 0-3.93 2.248 2.248 0 0 0 0-3.93 2.25 2.25 0 0 0 1.154-1.964"
      />
      <path
        fill="#CDD2E1"
        d="M19.804 14.187c0-.845-.466-1.58-1.154-1.965a2.248 2.248 0 0 0-1.194-4.211q.1-.325.1-.664a2.249 2.249 0 0 0-3.446-1.904A2.25 2.25 0 0 0 12 3.974V24c2.91 0 5.578-1.036 7.656-2.759a2.26 2.26 0 0 0-1.006-1.16 2.248 2.248 0 0 0 0-3.93 2.25 2.25 0 0 0 1.154-1.964"
      />
      <path
        fill="#fff"
        d="M15.416 7.55a1.645 1.645 0 0 1-1.955.338 1.65 1.65 0 0 1-2.922 0 1.645 1.645 0 0 1-1.954-.338c-.9.534-1.457 1.382-1.457 2.627 0 2.464 2.181 5.304 4.872 5.304s4.872-2.84 4.872-5.304c0-1.245-.558-2.093-1.457-2.626"
      />
      <path
        fill="#E9EDF5"
        d="M15.416 7.55a1.645 1.645 0 0 1-1.955.338A1.65 1.65 0 0 1 12 8.772v6.708c2.69 0 4.872-2.84 4.872-5.303 0-1.245-.558-2.093-1.457-2.626"
      />
      <path fill="#414952" d="M9.84 10.591a.569.569 0 1 0-1.107-.263.569.569 0 0 0 1.106.263" />
      <path fill="#23272B" d="M14.847 11.013a.569.569 0 1 0-.263-1.107.569.569 0 0 0 .263 1.106" />
      <path fill="#9196AA" d="M11.297 11.811h1.406v2.176h-1.406z" />
      <path fill="#707789" d="M12 11.811h.703v2.176H12z" />
      <path
        fill="#707789"
        d="M13.003 11.648c0 .447-.449.81-1.003.81s-1.003-.363-1.003-.81.449-.483 1.003-.483 1.003.036 1.003.483"
      />
      <path fill="#555A66" d="M12 11.165v1.293c.554 0 1.003-.363 1.003-.81s-.449-.483-1.003-.483" />
    </g>
    <defs>
      <clipPath id="llama_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgLlama)
const Memo = memo(ForwardRef)
export default Memo
