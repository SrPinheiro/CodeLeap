import { createElement, CSSProperties, ReactNode } from "react"
import styled from "styled-components"

type variantProp = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type props = {
    variant?: variantProp
    children?: ReactNode
    style?: CSSProperties
}

type tagProps = {
    tag: variantProp,
    children?: ReactNode
}

const TypographyTag = styled(({tag, children, ...props}: tagProps) => createElement(tag, props, children))``

const Typography = ({variant = 'p', children, ...props }: props) => {
    return (
        <TypographyTag tag={variant} {...props}>
            {children}
        </TypographyTag>
    )
}

export default Typography;