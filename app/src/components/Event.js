import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    open(i) {
        this.setState(() => ({
            id: i
        }))
    }
    close() {
        this.setState(() => ({
            id: null
        }))
    }
    render() {
        return (
            <Events>
                {this.props.data.map((event, i) => {
                    const Media = styled.div`
                        width: 100%;
                        min-height: 200px;
                        background: rebeccapurple;
                        background-image:url(${event.imgUrl});
                        background-repeat:no-repeat;
                        background-size:cover;
                        background-position:center;
                    `;
                    return (
                        <Container key={i} onClick={() => this.open(i)}>
                            <Media img={event.imgUrl}>
                                <Content>
                                    <h1>{event.title}</h1>
                                    <p>{event.description}</p>
                                </Content>
                            </Media>
                        </Container>
                    )
                })}

                <Modal open={this.state.id} close={this.close} />
            </Events>
        );
    }
}

export default Event;

const Container = styled.li`
    margin: 20px;
    text-align: left;
    color: white;
    transform: translateY(0);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: box-shadow .2s, transform .2s;
    cursor: pointer;
    user-select: none;

    h1, h2, p {
        letter-spacing: .5px;
    }

    h1 {
        font-size: 1.2rem;
        line-height: 2rem;
        font-weight: 500;
    }

    @media(min-width: 780px) {
        width: 40%;
        display: inline-block;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
    @media(min-width: 1024px) {
        width: 25%;
        display: inline-block;
    }
`;

const Content = styled.div`
    padding: 20px;
`;

const Events = styled.ul`
    text-align: center;
`;