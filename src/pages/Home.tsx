import { searchUsers } from '@/api'
import Card from '@/components/Card'
import Layout from '@/containers/Layout'
import { GithubUser } from '@/interfaces'
import * as classNames from 'classnames'
import _debounce from 'lodash/debounce'
import React, { FC, useCallback, useState } from 'react'
import { useQuery } from 'react-query'

const Home: FC = () => {
  const [inputVal, setInputVal] = useState<string>('')
  const { data, error, isLoading } = useQuery<GithubUser[] | null, Error>(
    ['users', inputVal],
    searchUsers,
  )

  const handleChange = useCallback(
    _debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setInputVal(e.target.value)
    }, 300),
    [],
  )

  if (error) {
    return (
      <div className='text-transform-upper'>
        Something went wrong. Please try again <br />
      </div>
    )
  }

  return (
    <Layout>
      <div className='field has-addons is-justify-content-center mb-5'>
        <div className='control'>
          <input
            className='input'
            type='text'
            defaultValue={inputVal}
            onChange={handleChange}
            placeholder='Find a user'
          />
        </div>
        <div className='control'>
          <a
            className={classNames('button is-info', {
              'is-loading': isLoading,
            })}
          >
            Search
          </a>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          {data?.map((user) => {
            return <Card key={user.id} user={user} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Home
