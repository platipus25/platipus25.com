import React from "react"
import Head from '../components/head'
import Nav from '../components/nav'

export default () => {
   return <React.Fragment>
        <Head title="Create" />
        <Nav />
        <h1>Create</h1>
        {/*
        <style jsx>{`
            h1{
                font-family: montserrat, sans-serif;
            }
        `}</style>
        */}
    </React.Fragment>
}