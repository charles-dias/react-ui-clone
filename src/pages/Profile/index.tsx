import React from 'react'

import { Container, Main, LeftSide, RightSide } from './styles'

import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'charles-dias'}
                        name={'Charles Dias'}
                        avatarUrl={'https://avatars2.githubusercontent.com/u/6137784?s=400&u=817174c15f5749a9ba297869ec010b541516d187&v=4'}
                        followers={887}
                        following={7}
                        company={'Average Digital'}
                        location={'São Paulp, Brazil'}
                        email={'charles.dias@average.com.br'}
                        blog={undefined}
                    />
                </LeftSide>
                <RightSide>

                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile