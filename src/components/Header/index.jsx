import { Button } from '../Button'
import { UserPicture } from '../Card/styles'
import {
    BuscarInputContainer,
    Container,
    Row,
    Input,
    Menu,
    MenuRight,
    Wrapper

} from './styles'
const Header = ({autenticado}) =>{
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={'https://raw.githubusercontent.com/pablohdev/dio-clone/master/src/assets/logo-dio.png'} alt="Logo da Dio" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/114706841?v=4'/>
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title={"Entrar"}/>
                            <Button title={"Cadastrar"}/>
                        </>
                        )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}
export { Header }