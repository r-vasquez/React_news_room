import { connect } from 'react-redux';
import Content from '../../components/Content';
import { getNewsByCategory } from '../actions';

const mapStateToProps = state => {
  return {
    news: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};

const mapDispatchToProps = dispatch => ({
  onGet: category => dispatch(getNewsByCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
