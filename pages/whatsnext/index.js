import React from 'react'
import Head from '../../components/head'
import Link from 'next/link'

export default () => (
    <div className="body">
    <Head title="Whatsnext"/>
        <h1 className="title">Whatsnext</h1>
        <h3 className="title subtitle">A school schedule library</h3>

        <div className="content">
            <div className="row">
                <Link prefetch href="/whatsnext/api">
                    <div className="card">
                        <h3>API Documentation</h3>
                    </div>
                </Link>
                <Link prefetch href="/whatsnext/download">
                    <div className="card">
                        <h3>Download</h3>
                    </div>
                </Link>
            </div>
            <div className="row">
                <Link href="http://github.com/platipus25/whatsnext">
                    <div className="card" onClick={() => window.location.assign("http://github.com/platipus25/whatsnext")}>
                        <h3>View the source code on GitHub</h3>
                    </div>
                </Link>
                <Link prefetch href="/whatsnext/examples">
                    <div className="card">
                        <h3>Examples</h3>
                    </div>
                </Link>
            </div>
        </div>
        <style jsx>{`
            .body{
                margin: 0 1em;
                font-family: sans-serif;
            }

            .title{
                text-align: center;
                font-family: "Courier", "Courier New", sans-serif;
                margin:0px;
            }

            h1.title{
                padding-top:6vh;
            }
            
            .subtitle{
                color:#55505a;
                padding-top: 0.2em;
            }

            .content{
                padding: 0 3em;
                margin-top: 4vh;
            }

            .row {
                max-width: 600px;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap-reverse;
                justify-content: space-around;
            }
            .card {
                padding: 18px 18px 24px;
                width: 220px;
                min-width: 200px;
                text-align: center;
                text-decoration: none;
                color: #434343;
                border: 1px solid #9b9b9b55;
                margin: 0.5em;
                border-radius:0.4em;
            }
            .card:hover {
                border-color: #067df799;
                background-color:#f1f4fc88;
            }
            .card h3 {
                margin: 0;
                color: #067df7;
                font-size: 18px;
            }
            .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 13px;
                color: #333;
            }

            @media only screen and (max-width: 400px) {
                body {
                  background-color: lightblue;
                }
              }
            
        `}</style>
    </div>

)