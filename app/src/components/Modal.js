import React, { Component } from 'react';
import styled from 'styled-components';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        console.log(this.props.open);
        
    }
    toggle() {
        // this.setState(() => ({ open: !this.state.open }))
        this.props.close()
    }
    render() {
        let open = this.props.open || this.props.open === 0;
        return (
            <Container className={open ? 'open' : ''}>
                <Content className={open ? 'open' : ''}>
                    <h1>Tits</h1>
                    <p>Descripy=tion</p>
                    <CloseButton onClick={this.toggle} />
                </Content>
            </Container>
        );
    }
}

export default Modal;

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    visibility: hidden;
    opacity: 0;
    background-color:rgba(0, 0, 0, 0.5);
    color: white;
    transition: opacity .2s ease-out;

    &.open {
        visibility: visible;
        opacity: 1;
    }
`;

const Content = styled.div`
    position: relative;
    margin: 20px;
    padding: 20px;
    max-width: 600px;
    text-align: left;
    background: #5C6BC0;
    transform: translateY(10px);
    transition: transform .8s ease-out;

    &.open {
        transform: translateY(0);
    }

    @media(min-width: 780px) {
        margin: 50px auto;
    }
`;

const CloseButton = styled.div`
    position: absolute;
    text-align: center;
    bottom: -20px;
    left: 50%;
    height: 40px;
    width: 40px;
    background-color: #7E57C2;
    border-radius: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);


    &:before, 
    &:after {
        position: absolute;
        left: 18px;
        top: 10px;
    content: ' ';
        height: 20px;
        width: 4px;
        background-color: white;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;