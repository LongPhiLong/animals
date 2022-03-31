
import styledComponents from "styled-components";
import Content from "../Contents/contents";
import Navbar from "../Navbar/Navbar";

function Animals(props) {
    return (
        <Container>
            <Navbar />
            <Content />
        </Container>
    )
}

export default Animals;
export const Container = styledComponents.div`

`;