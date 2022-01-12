import { ChangeEventHandler } from "react";
import { EditorBlockProps } from "../lib/util";

interface props extends EditorBlockProps {
    hasChecks?: boolean, 
    type?: string, 
    objKey: string,
    data: any,
    path: string
};

const ObjectInputBox: React.FC<props> = props => {

    ObjectInputBox.defaultProps = { hasChecks: false, type: 'text' };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(props.type !== 'number') props.updateData(props.objKey, e.target.value, props.path);
        else props.updateData(props.objKey, parseInt(e.target.value), props.path);
    };

    return (<input autoComplete={props.hasChecks ? 'on' : 'off' } spellCheck={props.hasChecks ? 'true' : 'false'} autoCorrect={props.hasChecks ? 'on' : 'off' } 
       value={props.data ? props.data : props.data == 0 ? 0 : '' } type={props.type} onChange={handleChange} name={props.objKey} id={props.objKey} ></input>);
};
export default ObjectInputBox;