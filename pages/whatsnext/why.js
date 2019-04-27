import React from 'react'
import Head from '../../components/head'

export default () => (
    <div>
        <Head title="Examples"/>
        <h1 className="title">Why make this?</h1>

        <div className="content">
            <p>
                hi
            </p>
        </div>
        <style jsx>{`
            .body{
                margin: 1em;
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

            .content{
                padding: 3em;
            }

            .content p{
                font-size: 1.5em;
            }
        `}</style>
    </div>
)