import { FaGithub } from "react-icons/fa";
import { HeaderAb ,
         ContainerAb,
         ImgContainer,
         TextContainer
         } from "./style";

export const AboutMePage = (): JSX.Element => {
    return (
        <main>
            <HeaderAb>
            <ImgContainer
                    src={`src/public/static/img/myImg/myPhoto.jpg`}
                    />
                <ContainerAb>
                    <TextContainer>Desde mais jovem sempre me interessei por como as coisas funcionavam além do que nós conseguiamos ver em um site ou jogos de computador que eram ambientes que eu estava muito inserido.
Comecei meus estudos de forma autodidata em linguagens como Python , Css e Javascript e posteriormente inicei meus estudos na Kenzie Academy onde aperfeiçoei ainda mais meus conhecimentos tanto com a parte do BackEnd quanto no FrontEnd.</TextContainer>
                </ContainerAb>
            </HeaderAb>
        </main>
    )
}