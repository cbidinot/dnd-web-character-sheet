import { ChangeEventHandler } from "react";
import { EditorBlockProps } from "../../lib/util";
import styles from '../../styles/editor/proficiencySelector.module.scss';

interface props extends EditorBlockProps {
    proficiency: string,
    proficiencyType: string, 
    data: string[]
};

const ProficiencySelector: React.FC<props> = props => {

    const findOwnIndex = (arr: string[]) => {
        const index = arr.findIndex(e => e == props.proficiency);
        if (index == -1) return false
        else return true;
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        const localArr = props.data;
        if (findOwnIndex(localArr)) {
            localArr.splice(localArr.findIndex(e => e == props.proficiency));
        } else {
            localArr.push(props.proficiency);
        }
        props.updateData(props.proficiencyType, localArr);
    };

    return (<div className={styles.inputModule}>
        <label htmlFor={props.proficiency} >{`${props.proficiency}:`}</label>
        <input type="checkbox" name={props.proficiency} id={props.proficiency} checked={findOwnIndex(props.data)} onChange={handleChange} />
    </div>);
};

export default ProficiencySelector;