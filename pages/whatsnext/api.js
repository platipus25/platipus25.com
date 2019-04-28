import React from 'react'
import Head from '../../components/head'
import superagent from 'superagent'

class APIDoc extends React.Component {
    constructor(props){
        super(props)
        this.state = { apiCode: "g" }
        superagent.get('https://whatsnext.cdn.platipus25.com/whatsnext.d.ts')
        .then((data) => {
            let apiCode = data.text
            this.setState({apiCode})
        })
    }

    render(){
        return (
        <div className="body">
            <Head title="API Docs"></Head>
            <p></p>
            <code id="apiCode"><pre>{this.state.apiCode}</pre></code>
            <style jsx>{`
                .body{
                    width:100%;
                    height:100vh;
                }
            `}</style>
        </div>
        )
    }
}

export default () => (
    <div>

    <APIDoc></APIDoc>
    </div>
)
