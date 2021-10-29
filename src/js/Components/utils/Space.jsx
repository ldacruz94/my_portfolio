import { Fragment } from "react";


const Space = (props) => {
    const { size } = props;
    const spaces = [];

    const generateSpaces = () => {
        for (let i = 0; i < size; i++) {
            spaces.push(<br/>);
        }
    }

    return (
        <Fragment>
            {generateSpaces()}
            {spaces.map(s => {
                return s
            })}
        </Fragment>
    );
}

export default Space;