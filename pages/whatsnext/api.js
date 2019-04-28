import React from 'react'
import Head from '../../components/head'
import superagent from 'superagent'

class APIDoc extends React.Component {
    constructor(props){
        super(props)
        this.state = { apiCode: "" }
        superagent.get('https://whatsnext.cdn.platipus25.com/whatsnext.d.ts')
        .then((data) => {
            let apiCode = data.text
            this.setState({apiCode})
        })
    }

    render(){
        return (
        <div className="apiDoc">
            <p></p>
            <code id="apiCode"><pre>{this.state.apiCode}</pre></code>
            <style jsx>{`
                
            `}</style>
        </div>
        )
    }
}

export default () => (
    <div className="body">
        <Head title="API Docs"/>
        <h1 className="title">API Documentation</h1>
        <APIDoc className="content"></APIDoc>
        <style jsx>{`
                .body{
                    margin: 1em;
                    font-family: sans-serif;
                    height:100vh;
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
