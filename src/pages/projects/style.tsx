import { styled} from "@/styles/stitches.config"
import { TbBorderRadius } from "react-icons/tb"

export const MainProjects = styled("section", {
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "black",
    height: "600px",
})

export const ContainerProjects = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "60px",
    backgroundColor: "$grey1",
    height: "450px",
    width: "90%",
    borderRadius: "10px",
    padding: "30px 0px 10px 20px",
})

export const TitleContainer = styled("h2", {
    fontSize: "20px",
    fontFamily: "$texts",
    fontWeight: "200",
    color: "white",
})

export const ListContainer = styled("ul", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "350px",
    width: "98%",
    backgroundColor: "$gray1",
})