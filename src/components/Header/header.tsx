import Container from '../Container/container'
import * as S from './header.styles'

function Header(){
    return (
        <Container>
            <S.headerContent>
                <S.title>
                    TODO LIST
                </S.title>
            </S.headerContent>
        </Container>
    )
}

export default Header