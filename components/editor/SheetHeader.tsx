import { EditorBlockProps } from "../../lib/util"
import SimpleInputBox from "../SimpleInputBox";
import styles from '../../styles/editor/sheetHeader.module.scss';

const SheetHeader: React.FC<EditorBlockProps> = props => {


    return (<div className={styles.sheetHeader}>
        <h3 className={styles.header} >Main Information:</h3>
        <div className={styles.inputModule}>
            <label htmlFor="name">Character Name:</label>
            <SimpleInputBox name="name" data={props.data.name} updateData={props.updateData} />
        </div>
        <div className={styles.inputModule}>
            <label htmlFor="race">Race:</label>
            <SimpleInputBox name="race" data={props.data.race} updateData={props.updateData} />
        </div>
        <div className={styles.inputModule}>
            <label htmlFor="background">Background:</label>
            <SimpleInputBox name="background" data={props.data.background} updateData={props.updateData} />
        </div>
        <div className={styles.inputModule}>
            <label htmlFor="alignment">Alignment:</label>
            <SimpleInputBox name="alignment" data={props.data.alignment} updateData={props.updateData} />
        </div>
    </div>);
}

export default SheetHeader;