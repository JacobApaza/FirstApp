import React from "react";
import PropTypes from "prop-types";
import ButtonCell from "./ButtonCell";


class ButtonMatrix extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const matrix = [];
        for(let i = 0; i < this.props.rows; i++) {
            const row = [];
            for(let j = 0; j < this.props.cols; j++) {
                row.push(<ButtonCell></ButtonCell>);
            }
            matrix.push(<div style = {{ display: "inline-block"}}>{row}</div>);
        }
        return(
            <div>
                {matrix}
            </div>
        );
    }
}

ButtonMatrix.propTypes = {
    rows: PropTypes.number.isRequired, 
    cols: PropTypes.number.isRequired
};

export default ButtonMatrix;