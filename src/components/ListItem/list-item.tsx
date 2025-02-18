import * as S from './list-item.styles'
import { ListItemProps } from './list-item.types'

function ListItem({
    children
}: ListItemProps) {
    return (
        <S.ListItemContent>
            {children}
        </S.ListItemContent>
    )
}

export default ListItem