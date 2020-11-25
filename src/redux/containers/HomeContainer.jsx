import { connect } from 'react-redux';
import Home from '../../components/routes/Home';
import { getLatestNews } from '../actions';

const mapStateToProps = state => {
  return {
    news: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};

const mapDispatchToProps = dispatch => ({
  onGet: () => dispatch(getLatestNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
