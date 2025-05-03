import { CenterAlignContainer } from "src/components/CenterAlignContainer";
import { FlexContainer } from "src/components/FlexContainer";
import { HeaderContainer } from "src/components/HeaderContainer";
import NewPostContainer from "src/components/NewPostContainer";
import ShowPostContainer from "src/components/ShowPostContainer";
import Typography from "src/components/Typograph";
import { postType } from "src/utils/types";
import { useTheme } from "styled-components";

const HomePageView = () => {
    const posts: postType[] = [
        {
          "id": 71435,
          "username": "leonardo",
          "created_datetime": "2025-05-02T12:51:04.722438Z",
          "title": "Teste de funcionamento de request",
          "content": "Teste",
          "author_ip": "177.85.193.22"
        },
        {
          "id": 71436,
          "username": "marina",
          "created_datetime": "2025-05-02T13:12:10.123456Z",
          "title": "Meu primeiro post",
          "content": "Olá, mundo!",
          "author_ip": "192.168.0.10"
        },
        {
          "id": 71437,
          "username": "carlos",
          "created_datetime": "2025-05-02T14:05:33.000001Z",
          "title": "Atualização importante",
          "content": "Deploy finalizado com sucesso.",
          "author_ip": "201.55.88.33"
        },
        {
          "id": 71438,
          "username": "ana",
          "created_datetime": "2025-05-02T14:45:50.555555Z",
          "title": "Dica do dia",
          "content": "Use sempre variáveis de ambiente!",
          "author_ip": "189.123.55.44"
        },
        {
          "id": 71439,
          "username": "joao",
          "created_datetime": "2025-05-02T15:10:10.999999Z",
          "title": "Erro estranho",
          "content": "Alguém já viu esse bug no React?",
          "author_ip": "172.16.254.1"
        },
        {
          "id": 71440,
          "username": "juliana",
          "created_datetime": "2025-05-02T15:20:00.123123Z",
          "title": "Nova feature",
          "content": "Acabei de subir a funcionalidade de login!",
          "author_ip": "186.233.90.12"
        },
        {
          "id": 71441,
          "username": "rafael",
          "created_datetime": "2025-05-02T16:00:00.000000Z",
          "title": "Refatoração concluída",
          "content": "Código mais limpo e legível agora.",
          "author_ip": "10.0.0.5"
        },
        {
          "id": 71442,
          "username": "patricia",
          "created_datetime": "2025-05-02T16:30:45.789789Z",
          "title": "Boas práticas",
          "content": "Evite código duplicado sempre que possível.",
          "author_ip": "200.200.200.200"
        },
        {
          "id": 71443,
          "username": "lucas",
          "created_datetime": "2025-05-02T17:15:12.654321Z",
          "title": "Desempenho",
          "content": "Reduzi o tempo de build em 40%.",
          "author_ip": "100.100.100.100"
        },
        {
          "id": 71444,
          "username": "bianca",
          "created_datetime": "2025-05-02T18:00:01.222222Z",
          "title": "Teste automatizado",
          "content": "Adicionei testes com Cypress.",
          "author_ip": "8.8.8.8"
        }
      ]
      const theme = useTheme()
    return (
        <CenterAlignContainer>
            <FlexContainer style={{ minHeight: '100%', padding: 0}}>
                <HeaderContainer>
                    <Typography variant="h1">Home Page</Typography>
                </HeaderContainer>
                <FlexContainer style={{ alignItems: 'center', width: '100%'}}>
                    <NewPostContainer />
                    {
                        posts.map((post) => (
                            <ShowPostContainer style={{ marginTop: theme.spacing.md}} post={post} />
                        ))
                    }
                </FlexContainer>
            </FlexContainer>
        </CenterAlignContainer>
    )
}

export default HomePageView;
