import { Project } from "@/components/Project"
import { ContainerAb } from "../aboutme/style"
import { ContainerProjects, ListContainer, MainProjects, TitleContainer } from "./style"

export const ProjectPage = (): JSX.Element => {
    return (
        <main>
            <MainProjects>
                <ContainerProjects>
                    <TitleContainer>Meus Projetos</TitleContainer>
                    <ListContainer>
                        <Project/>
                    </ListContainer>
                </ContainerProjects>
            </MainProjects>
        </main>
    )
} 