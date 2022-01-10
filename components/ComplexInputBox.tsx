import { DocumentData } from "firebase/firestore";
import { ChangeEventHandler } from "react";

interface props {
    hasChecks?: boolean,
    type?: string,
    dataArr: any[];
    updateData: (key: string, change: any) => void,
    index: number,
    name: string,
    path: string,
    objKey: string
}

const ComplexInputBox: React.FC<props> = props => {

    ComplexInputBox.defaultProps = { hasChecks: false, type: 'text' };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const newArr = props.dataArr;
        newArr[props.index][props.objKey] = e.target.value;
        props.updateData(props.path, newArr);
    };

    return (<input autoComplete={props.hasChecks ? 'on' : 'off' } spellCheck={props.hasChecks ? 'true' : 'false'} autoCorrect={props.hasChecks ? 'on' : 'off' } type={props.type}
    name={props.name} id={props.name} onChange={handleChange} value={props.dataArr[props.index][props.objKey]}
    ></input>);
};

export default ComplexInputBox;