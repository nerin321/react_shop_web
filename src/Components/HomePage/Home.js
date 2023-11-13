import React from 'react'
import { HomeMain } from './HomeMain'
import { Leatest } from './Leatest'
import { Trending } from './Trending'

export const Home = () => {
  return (
    <div>
      <HomeMain></HomeMain>
      <Leatest></Leatest>
      <Trending></Trending>
    </div>
  )
}
