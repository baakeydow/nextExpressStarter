import Head from 'next/head'
import React from "react";
import Nav from "./nav";

export default class Layout extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div>
                <Head>
                    <title>MyAwesomeSite { this.props.title }</title>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width shrink-to-fit=no'/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="/static/app.css" rel="stylesheet" />
                </Head>
                <header>
                    <Nav/>
                </header>
                <div id="app" className="container">
                    <div className="Content title">
                        { this.props.children }
                    </div>
                </div>
                <footer className="Customfooter">
                </footer>
            </div>
        )
    }
}
