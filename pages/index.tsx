import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero/Hero'
import Header from '../src/components/Header/Header'
import KarateSkils from '../src/components/KarateSkils/KarateSkils'
import KarateBenefits from '../src/components/KarateBenefits/KarateBenefits'

const Home: NextPage = () => {
  return (
    <main>
      <Header/>
      <Hero/>
      <KarateSkils/>
      <KarateBenefits/>
    </main>
  )
}

export default Home
