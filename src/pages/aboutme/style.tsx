import { styled} from "@/styles/stitches.config"

export const HeaderAb = styled("header", {
     backgroundColor: "$grey1",
     padding: "12rem 0 8rem 0",
     height: "500px",
     display: "flex",
     alignItems: "center",
     alignContent: "center",
     justifyContent: "space-evenly",


})

export const ContainerAb = styled("section", {
    backgroundColor: "black",
    height: "150px",
    width: "50%",
    alignItems: "center",
    alignContent: "flex-start",
    borderTopRightRadius:"50px",
    borderBottomRightRadius:"50px",
    boxShadow: "0px 3px 3px 3px grey",
    display: "flex",
    padding: "50px",
    opacity: "0.95"
})

export const ImgContainer = styled("img", {
    height: "150px",
    width: "200px",
    borderTopLeftRadius: "50px",
    borderBottomLeftRadius: "50px",
})

export const TextContainer = styled("text", {
    color: "white",
    fontSize: "14px",
    fontWeight: "100",
    fontFamily: "$texts",
    width: "500px"
})