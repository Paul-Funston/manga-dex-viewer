import React from 'react'
import Catalog from '../components/Catalog'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
    <Catalog />

    <Helmet>
        <title>MangaDex Viewer</title>
    </Helmet>
    </>
  )
}

export default Home