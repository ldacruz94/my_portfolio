interface SpaceProps {
    size: number;
};

const Space = ({ size }: SpaceProps) => {
    let spaces:JSX.Element[] = [];

    const generateSpaces = () => {
        for (let i:number = 0; i < size; i++) {
            spaces.push(<br/>);
        }
    }

    return (
        <>
         {generateSpaces()}
         {spaces.map(s => {return s;})}
        </>
    );
}

export default Space;