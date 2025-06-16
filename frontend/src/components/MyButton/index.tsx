import type { ButtonProps } from "antd"
import { MyButton } from "./styles"


// eslint-disable-next-line react-refresh/only-export-components
export default ({...props}: ButtonProps) => {
    return <MyButton {...props} />
}