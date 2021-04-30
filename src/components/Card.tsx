import { GithubUser } from '@/interfaces'
import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  user: GithubUser
}

const Card: FC<Props> = ({ user }) => {
  return (
    <Wrapper>
      <Left>
        <AvatarWrapper href={user.html_url} target='_blank' rel='noreferrer'>
          <Avatar src={user.avatar_url} />
        </AvatarWrapper>
        <UserInfo>
          <UserLogin>@{user.login}</UserLogin>
          <UserId>#{user.id}</UserId>
        </UserInfo>
      </Left>
      <Right>
        <Button
          href={user.html_url}
          target='_blank'
          rel='noreferrer'
          className='button is-info'
        >
          View profile
        </Button>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid silver;
  width: 600px;
  position: relative;
  margin: 0 auto 20px;
`

const Left = styled.div`
  display: flex;
`

const Right = styled.div``

const AvatarWrapper = styled.a`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-right: 10px;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const UserLogin = styled.div`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`

const UserId = styled.div`
  font-size: 12px;
  color: silver;
`

const Button = styled.a``

export default Card
