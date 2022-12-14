import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { useForm} from 'react-hook-form'
import { Input } from '../../components/Input'
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'
import { api } from '../../services/api';
import { IFormData } from './types';
const schema = yup.object({
    email: yup.string().email('Email inválido').required('Campo Obrigatorio'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatorio'),
  }).required();

const Login = () =>{
    const navigate = useNavigate();
    //eslint-disable-next-line
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formdata: IFormData) => {
        try {
            const { data } = await api.get(`users?email=${formdata.email}&senha=${formdata.password}`);
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválidos')
            }
        } catch (error) {
            alert('Houve um erro, tente novamente.')
        }

    };

    

    return (<> 
    <Header/>
    <Container>
        <Column>
            <Title>
                A Plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
        <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" control={control} placeholder='E-mail'/>
                <Input name="password" control={control} placeholder='Senha' type="password"/>
                <Button title="Entrar" variant='secondary' type="submit"/>
            </form>
            <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
            </Row>
        </Wrapper>
        </Column>
    </Container>
    </>)
    
}
export { Login }