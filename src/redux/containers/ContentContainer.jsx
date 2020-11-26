import { connect } from 'react-redux';
import Content from '../../components/Content';
import { getNewsByCategory, setActiveItem } from '../actions';

const mapStateToProps = state => {
  return {
    news: state.news,
    hasError: state.loadingError,
    isLoading: state.loadingInProgress
  };
};

const mapDispatchToProps = dispatch => ({
  onGet: category => dispatch(getNewsByCategory(category)),
  setActiveTab: name => dispatch(setActiveItem(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
