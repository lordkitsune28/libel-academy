import React from 'react'
import { ActionsMovies } from '../components/ActionsMovies'
import { Banner } from '../components/Banner'
import { ComedyMovies } from '../components/ComedyMovies'


export const App = () => {
  return (
    <div>
        <Banner/>
        <ActionsMovies/>
        <ComedyMovies/>
    </div>
  )
}
