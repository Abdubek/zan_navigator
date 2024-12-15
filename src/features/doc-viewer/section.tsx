import {ReactNode} from "react";
import {clsx} from "clsx";

type Props = {
  children?: ReactNode
  weight?: 'bold' | 'normal'
  align?: 'left' | 'center' | 'right' | 'between'
  isParagraph?: boolean
  isItalic?: boolean

}

export const Section = ({
                          children,
                          weight = 'normal',
                          align = 'left',
                          isParagraph = false,
                          isItalic = false
}: Props) => {
  return (
    <div className={clsx(
      "flex py-[5px] pr-[10px] pl-[15px]",
      {
        'font-bold': weight === 'bold',
        'justify-center': align === 'center',
        'justify-start': align === 'left',
        'justify-end': align === 'right',
        'justify-between': align === 'between',
        'italic': isItalic,
      })}>
      {isParagraph ? <span> &nbsp; </span> : null}
      {children}
    </div>
  )
}