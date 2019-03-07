import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'
import Link from 'next/link'


const pages = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
  { href: '/create', label: 'Create'},
  { href: '/', label:'Home'}
].map(link => {
link.key = `nav-link-${link.href}-${link.label}`
return link
})

const HeadNav = class {
    init(){
        for(page of pages) {
            if(this.props.title === page.title){
                this.setState({thispage:page})
            }
        }
    }

    render(){
        <React.Fragment>
            <Head title={props.title || ''}/>
            <Nav pages={this.props.pages} thispage={this.state.thispage}/>
        </React.Fragment>
    }
}
