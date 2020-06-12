import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/Template/TopMenu';
import SideMenu from '../components/Template/SideMenu';
import Footer from '../components/Template/Footer';
import MainContent from '../components/Template/MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <SideMenu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;