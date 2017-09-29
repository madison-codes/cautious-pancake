import * as React from "react";
// import Nav from "../components/Nav";
// import Logo from "../components/Logo";
// import Paper from 'material-ui/Paper';
// import DevNav from "../components/DevNav";
// import RefSB from "../components/RefSB";
// import GuideSB from "../components/GuideSB";

// import AppBar from '../components/AppBar';
// import SideNav from '../components/SideNav';

// import "../styles/_main.scss";
// require('prismjs/themes/prism.css');

import './index.css';

const mainStyleOpen = {
  width: 'calc(100vw - 240px)',
  marginLeft: '240px'
}

const mainStyleClose = {
  width: 'calc(100vw - 62px)',
  marginLeft: '62px',
}

interface AppProps {
  children: any;
  data: any;
}

interface AppState {
  open: boolean;
}

export default class App extends React.Component<{}, {}> {
  state = {
    open: true,
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return(
      <div id="main">
          {/* {/* <AppBar /> */}
          {/* <SideNav navOpen={this.state.open} toggle={this.handleDrawer} />
          <div id="main-content-container" style={this.state.open ? mainStyleClose : mainStyleOpen}> */}
            {this.props.children()}
          </div>
      // </div>

    )
  }
}

// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }){
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             title
//             index
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `