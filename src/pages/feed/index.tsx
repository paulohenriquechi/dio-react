import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import { Container, Column, Title, TitleHighlight } from './styles'
const Feed = () =>{
    return (<> 
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome="Paulo Henrique" image="https://avatars.githubusercontent.com/u/114706841?v=4"/>
            <UserInfo percentual={65} nome="Henrique Paulo" image="https://avatars.githubusercontent.com/u/114706841?v=4"/>
            <UserInfo percentual={50} nome="Haulo Penrique" image="https://avatars.githubusercontent.com/u/114706841?v=4"/>
            <UserInfo percentual={30} nome="Paule Henriquo" image="https://avatars.githubusercontent.com/u/114706841?v=4"/>
            <UserInfo percentual={25} nome="Pauque Henrilo" image="https://avatars.githubusercontent.com/u/114706841?v=4"/>
        </Column>
    </Container>
    </>)
    
}
export { Feed }