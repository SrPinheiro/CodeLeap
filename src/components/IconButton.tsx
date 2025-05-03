import { CSSProperties, ReactNode } from "react";
import { CircleBox } from "src/components/CircularBox";

type props = {
    style?: CSSProperties
    onClick?: () => void
    children: ReactNode
}
const IconButton = ({style, onClick, children}: props) => {

    return (
        <CircleBox
            style={{
                cursor: 'pointer',
                padding: '5px',
                ...style
            }}
            onClick={onClick}
        >
            {children}
        </CircleBox>
    )
}

export default IconButton;