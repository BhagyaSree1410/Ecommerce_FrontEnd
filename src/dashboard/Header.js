import React , { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Login from './login';

const Styledul = styled.ul`
margin-top : 20px;
list-style: none;
display: flex;
flex-direction: row;
`
const StyledButton = styled(Button)`
&.ui.button {
    color: #2874f0;
    font-weight: 500;
    background-color: #fff;
    cursor: pointer;
    border-radius: 2px;
    height: 32px;
    padding: 5px 40px;
    border: 1px solid #dbdbdb;
    font-size: 16px;
}
`
class Header extends Component {
    render(){
        return(
            <div style = {{ 
                "position": "fixed",
                "top": "0",
                "background" : "#2874f0",
                "border" : "2px sold whitesmoke",
                "width" : "100%",
                "height" : "70px"
                }}>
                <nav>
                <Styledul className="ul">
                    <li><NavLink to = '/home'>Home</NavLink></li>
                    <li><NavLink to = '/search'>Seacrh</NavLink></li>
                    <li><Modal size="tiny" trigger={<StyledButton color="#fff">Login</StyledButton>} closeIcon>
                        <Login/>
                        </Modal>
                    </li>
                </Styledul>
                </nav>
            </div>
        );
    }
}

export default Header;