import { AboutMePage } from "@/pages/aboutme";
import { Home } from "@/pages/home";
import { ProjectPage } from "@/pages/projects";
import { Route, Routes } from "react-router-dom";


export function MainRoutes () {
   return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutMe" element={<AboutMePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
    </Routes>
   )
}