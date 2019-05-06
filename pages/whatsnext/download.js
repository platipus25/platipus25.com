import React from 'react'
import Head from '../../components/head'
import Link from 'next/link'

export default () => (
    <div className="body">
    <Head title="Whatsnext"/>
        <h1 className="title">Downloads</h1>
        <h3 className="title subtitle">Web or Node.js</h3>

        <div className="content">
            <a href="http://whatsnext.cdn.platipus25.com/whatsnext.web.js" download>
                <div className="card">
                    <h3>Web</h3>
                </div>
            </a>
            <p>
                Include using 
                <code>&lt;script src="./whatsnext.web.js"&gt;&lt;/script&gt;</code>
                <br/>
                Accessible with <code>window.whatsnext</code>
            </p>
            <a href="http://whatsnext.cdn.platipus25.com/whatsnext.node.js" download>
                <div className="card">
                    <h3>Node.js</h3>
                </div>
            </a>
            <p>Accessible via <code>require("./whatsnext.node.js")</code></p>
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
                /*padding-top: 3em;*/
                margin: 0;
            }

            /*.row {
                margin: 0 auto;
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: space-around;
            }*/

            .card {
                margin: 0.5em auto;
                margin-top: 6vh;
                padding: 18px 0;
                width: 100%;
                min-width: fit-content;
                text-align: center;
                text-decoration: none;
                color: #434343;
                border: 1px solid #9b9b9b55;
                border-radius:0.4em;
            }
            .card:hover {
                border-color: #067df799;
                background-color:#f1f4fc88;
            }
            .card h3 {
                margin: 0;
                color: #067df7;
            }
            .card p {
                margin: 0;
                padding: 12px 0 0;
                font-size: 1.15em;
                color: #333;
            }
            
            code{
                padding: 0 0.5em;
                margin: 0.2em 0;
                background-color: #aaaaaa33;
                border-radius: 0.2em;
                word-break: break-word;
            }

            a{
                text-decoration: none;
            }

            /*@media only screen and (max-width: 600px) {
                body {
                  background-color: lightblue;
                }
            }*/

            @media (max-height: 600px) {            
                .card {
                    margin-top: 4vh;
                }
                h1.title {
                    padding-top: 2vh;
                }
            }

        `}</style>
    </div>

)