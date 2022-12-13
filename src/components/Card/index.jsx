import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture} from './styles'

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground src='https://wallpaperaccess.com/full/314821.jpg'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/114706841?v=4'/>
                <div>
                    <h4>Paulo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso HTML e CSS</h4>
                <p>Projeto feito o curso de HTMl e CSS no bootcamp DIO do Global avançado...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    10 likes
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
