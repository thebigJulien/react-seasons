import React from 'react';

const Spinner = (props) => {

    return (
        <div class="ui active dimmer">
    <div class="ui big text loader"> {props.message} </div>
  </div>
    )
};

//default text if I don't pass a message in the Spinner
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner