import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

function Navbar(props) {
    let navigate = useNavigate();
    let logout = () => {
        localStorage.removeItem("accessToken");
    }
    navigate("../", { replace: true });
    return (
        <Navi>
        <div className="container">
                <button className="btn" onClick={logout}><a href="/">LOG OUT</a></button>
        </div>
        </Navi>
    )
}

export default Navbar;

export const Navi = styledComponents.div`
    left:0;
    top:0;
    bottom:0;
    height: 60px;
    width: 100%;
    padding: 0;
    display: flex;
    position: fixed;
    background-color: RGBA( 128, 0, 0, 1 );
    z-index: 10;

    .container {
        flex-direction: row;
        width: 100%;
        heigth: 100%;
        .btn {
            height: 50px;
            width: 70px;
            background: RGBA( 128, 128, 128, 1 );
            padding-top: 5px;
            float: right;
            padding: 5px 0px;
            border: black;
            margin-top: 5px;
            margin-right: 30px;
            border-radius: 5px;
            cursor: pointer;


            &:hover {
                background-color: RGBA( 118, 128, 120, 0.8 );

            }

            a{
                text-decoration: none;
                color: white;
            }
        }

    }



`;
