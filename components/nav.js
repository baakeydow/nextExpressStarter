import React from "react";
import Link from 'next/link'
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState(
      {
        collapsed
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(nextProps);
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    const navStyle = {
        backgroundColor: "#282c37"
    };
    const spanStyle = {
        display: "block",
        height: "6px"
    };
    const buttonStyle = {
        margin: "0 50px 0 20px",
        color: "white"
    };

    return (
      <nav style={navStyle} className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <ul className="nav navbar-nav">
              <span style={spanStyle}></span>
              <button style={buttonStyle} className="btn btn-success">cta</button>
            </ul>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="test" onClick={this.toggleCollapse.bind(this)}>
                <Link href='/'><a>Welcome</a></Link>
              </li>
              <li className="test" onClick={this.toggleCollapse.bind(this)}>
                <Link href='/about'><a>About</a></Link>
              </li>
              <li className="test" onClick={this.toggleCollapse.bind(this)}>
                <Link href='/contact'><a>Contact</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
