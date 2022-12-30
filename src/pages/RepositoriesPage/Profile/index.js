import React from 'react'

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

const Profile = () => (
    <Container>
        <Header>
            <Avatar src="https://avatars.githubusercontent.com/u/82219708?v=4" />
            <Login>leonardo-27-Dev</Login>
            <Name>Leonardo Vangelista</Name>
        </Header>
        <Inner>
            <Data>
                <MdGroup size={20} />
                30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
            </Data>
            <Data> 
                <MdWork size={20} />
                ANB Farma 
            </Data>
            <Data> 
                <MdLocationCity size={20} />
                Pinhais/PR 
            </Data>
            <Data>
                <MdLink size={20} />
                <a href='https://anbfarma.com.br'>anbfarma.com.br</a>
            </Data>
        </Inner>
    </Container>
)

export default Profile