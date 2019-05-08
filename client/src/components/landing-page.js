import React from 'react';
import {connect} from 'react-redux';
// import {fetchData} from '../actions';


export class LandingPage extends React.Component{

    // componentDidMount() {
    //     this.props.dispatch(fetchData());
    //     console.log(this.props.demo.data.message);
    // }

    render() {
        return (
        <main>

        Test <a href="test">Test Linke</a>
        </main>
        );
    }
}

const mapStateToProps = state => {

    return state;
    // {
        // error: state.demo.error,
        // loading: state.demo.loading
    // }
}

export default connect(mapStateToProps)(LandingPage);