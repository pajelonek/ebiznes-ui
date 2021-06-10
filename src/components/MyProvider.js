import React, {Component} from 'react';

export const MContext = React.createContext(undefined);  //exporting context object
class MyProvider extends Component {
    state = {message: ""}
    render() {
        return (
            <MContext.Provider value={
                {   state: this.state,
                    setMessage: (value) => this.setState({
                        message: value })}}>
                {this.props.children}
            </MContext.Provider>)
    }
}
export default MyProvider;