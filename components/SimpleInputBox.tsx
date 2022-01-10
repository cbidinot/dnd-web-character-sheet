import { DocumentData } from "firebase/firestore";
import { ChangeEventHandler } from "react";


const SimpleInputBox: React.FC<{hasChecks?: boolean, type?: string, name: string, data: any, updateData: (key: string, change: any) => void }> = props => {

    SimpleInputBox.defaultProps = { hasChecks: false, type: 'text' };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(props.type !== 'number') props.updateData(props.name, e.target.value)
        else props.updateData(props.name, parseInt(e.target.value));
    };

    return (<input autoComplete={props.hasChecks ? 'on' : 'off' } spellCheck={props.hasChecks ? 'true' : 'false'} autoCorrect={props.hasChecks ? 'on' : 'off' } 
       value={props.data ? props.data : '' } type={props.type} onChange={handleChange} name={props.name} id={props.name} ></input>);
};

export default SimpleInputBox;