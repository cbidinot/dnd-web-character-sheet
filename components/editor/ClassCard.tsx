import { EditorBlockProps } from "../../lib/util";
import SimpleInputBox from "../SimpleInputBox";
import styles from '../../styles/editor/classCard.module.scss';
import ComplexInputBox from "../ComplexInputBox";

interface props extends EditorBlockProps {
    index: number
    data: {class: string, level: number}[];
}

const ClassCard: React.FC<props> = props => {

    const deleteClass = () => {

        const newArr = props.data;
        newArr.splice(props.index, 1);
        props.updateData('classes', newArr);
    };

    if(props.data) {
        return (<div className={styles.characterCard}>

            <div className={styles.inputModule}>
                <label htmlFor={`class${props.index}`}>Class:</label>
                <ComplexInputBox name={`class${props.index}`} path="classes" objKey="class" dataArr={props.data} index={props.index} updateData={props.updateData} />
            </div>

            <div id={styles.singleNumber} className={styles.inputModule}>
                <label htmlFor={`level${props.index}`}>Levels:</label>
                <ComplexInputBox name={`level${props.index}`} type='number'  updateData={props.updateData} objKey="level" path="classes" index={props.index} dataArr={props.data} />
            </div>

            <button className={styles.delete} onClick={deleteClass}>X</button>
            
        </div>);    
    } else {return null};
    
};

export default ClassCard;