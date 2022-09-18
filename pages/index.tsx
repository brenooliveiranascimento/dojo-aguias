import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero/Hero'

const Home: NextPage = () => {
  return (
    <main>
      <Hero/>
    </main>
  )
}

export default Home