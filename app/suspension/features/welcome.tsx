import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Text from '../components/Text';
import routes from '../constants/routes.json';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    fontSize: 40,
  },
  slogan: {
    fontSize: 28,
    marginTop: theme.spacing(4),
  },
  slogan2: {
    fontSize: 24,
    marginTop: theme.spacing(1),
  },
}));

const Welcome: React.FC = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.root}>
      {process.env.NODE_ENV === 'development' && (
        <>
          <Link to={routes.HEROSELECTION}>to heroes</Link>
          <Link to={routes.GAMEOVER}>to gameover</Link>
        </>
      )}
      <Text className={classes.slogan}>欢迎使用</Text>
      <Text className={classes.slogan2}>酒馆战棋统计工具</Text>
    </Layout>
  );
};

export default Welcome;
