import React from 'react'
import Head from '../../components/head'

export default () => (
    <div className="body">
        <Head title="Examples"/>
        <h1 className="title">Example Usage</h1>
        <div className="content">
            <p>
                The web bundle esposes <code>window.whatsnext</code> using umd. The node bundle uses commonjs2, so you can import using <code>require()</code>.
            </p>
        </div>
        <iframe height="100%" width="100%" src="/static/whatsnext/index.html"></iframe>
        <style jsx>{`
            .body{
                margin: 1em;
                font-family: sans-serif;
                height:50vh;
            }

            .title{
                text-align: center;
                font-family: "Courier", "Courier New", sans-serif;
                margin:0px;
            }

            h1.title{
                padding-top:6vh;
            }

            .content{
                padding: 3em;
            }

            .content p{
                font-size: 1.5em;
            }

            iframe{
                border:none;
            }
        `}</style>
    </div>
)