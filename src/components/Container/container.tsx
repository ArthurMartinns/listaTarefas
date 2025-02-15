import * as S from './container.styles'
import { ContainerProps } from './container.types'

function Container({
    children
}: ContainerProps) {
    return (
        <S.content>
            {children}
        </S.content>
    )
}

export default Container