import Spinner from '../spinner/Spinner';
import { Component } from 'react';
import ErrorIndicator from '../error/Error-indicator';

const WithData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      this.setState({ loading: true, error: false });
      this.props
        .getData()
        .then((data) => this.setState({ data, loading: false }))
        .catch(() => this.setState({ error: true, loading: false }));
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) return <Spinner />;

      if (error) return <ErrorIndicator />;

      return <View {...this.props} data={data} />;
    }
  };
};

export default WithData;
