import React from 'react'
import Head from '../../components/head'

export default () => (
    <div className="body">
        <Head title="API Docs"></Head>
        <iframe width="100%" height="100%" src="https://whatsnext.cdn.platipus25.com/whatsnext.d.ts"></iframe>
        <style jsx>{`
            .body{
                width:100%;
                height:100vh;
            }
        `}</style>
    </div>
)