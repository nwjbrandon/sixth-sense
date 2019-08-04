import React from 'react';
import AccomodationsForm from '../../components/booking/Accomodations';

import Navbar from "../../components/navBar/navbar";
import bg from '../../assets/img/bgimg4.jpg'

import { connect } from 'react-redux'

import ImageCarousell from '../../components/booking/ImageCarousell/ImageCarousell'
import SEO from "../../components/seo";
import { seoTags } from "../../assets/data/seo";
// import kiwi from '/assets/img/kiwi.svg'


import { ThemeProvider } from '@material-ui/styles';
import { white, green, orange } from '@material-ui/core/colors';

import { createMuiTheme, makeStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fafafa",
    },
    primary: {
      main: green[500]
    }
  },
});


class Accomodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  render() {

    const divStyle = {
      paddingBottom: 50,
      marginTop: 0,
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      margin: 0,
      backgroundImage: `url(${bg})`,
      maxWidth: "100%",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',

    };

    return (
      <div >
        <ThemeProvider theme={theme}>
          <SEO
            title={seoTags.booking.title}
            description={seoTags.booking.description}
            keywords={seoTags.booking.keywords}
          />
          <div style={divStyle}>
            <Navbar />
            <AccomodationsForm />
          </div>

          <ImageCarousell />


        </ThemeProvider>


      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    personalDetails: state.booking.personalDetails,
    tripDetails: state.booking.tripDetails,
    grossAmount: state.booking.grossAmount,
    errorMsg: state.booking.errorMsg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onError: (val) => dispatch({ type: "ERR_MSG", payload: val }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accomodation);

