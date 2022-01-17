import React from 'react'
import SearchForm from '../components/CountryPageContents/SearchForm'
import Country from '../components/CountryPageContents/Country'
import Header from '../components/Header/Header'
function Home() {
    return (
        <div className="dark:bg-slate-800 dark:text-white w-full">
          <Header/>
          <SearchForm/>
          <Country/>
        </div>
    )
}

export default Home
