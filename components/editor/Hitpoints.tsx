import { EditorBlockProps } from "../../lib/util";
import styles from '../../styles/editor/hitpoints.module.scss';
import ObjectInputBox from "../ObjectInputBox";

const Hitpoints: React.FC<EditorBlockProps> = props => {

    return (<div className={styles.hitpoints}>
        <h3 className={styles.header}>Hitpoints</h3>

        <div className={styles.inputModule}>
            <label htmlFor="maxHP">Max HP:</label>
            <ObjectInputBox objKey="maxHP" data={props.data.hitpoints?.maxHP} updateData={props.updateData} type="number" path="hitpoints" />
        </div>

        <div className={styles.inputModule}>
            <label htmlFor="currentHP">Current HP:</label>
            <ObjectInputBox objKey="currentHP" data={props.data.hitpoints?.currentHP} updateData={props.updateData} type="number" path="hitpoints" />
        </div>

        <div className={styles.inputModule}>
            <label htmlFor="tempHP">Temporary HP:</label>
            <ObjectInputBox objKey="tempHP" data={props.data.hitpoints?.tempHP} updateData={props.updateData} type="number" path="hitpoints" />
        </div>
    
        <div className={styles.hitDice}>
            <h4>Hit Dice</h4>
            <label htmlFor="hitDice">Type:</label>
            <ObjectInputBox objKey="hitDice" data={props.data.hitpoints?.hitDice} updateData={props.updateData} path="hitpoints" />
            <label htmlFor="hitDiceQuantity">Total:</label>
            <ObjectInputBox objKey="hitDiceQuantity" data={props.data.hitpoints?.hitDiceQuantity} updateData={props.updateData} path="hitpoints" type="number"/>
        </div>

        <div className={styles.hitDice}>
            <h4>Death Saves</h4>
            <label htmlFor="successes">Successes:</label>
            <ObjectInputBox objKey="successes" data={props.data.deathSaves?.successes} updateData={props.updateData} type="number" path="deathSaves" />
            <label htmlFor="fails">Failures:</label>
            <ObjectInputBox objKey="fails" data={props.data.deathSaves?.fails} updateData={props.updateData} path="deathSaves" type="number"/>
        </div>
        
    </div>);
};

export default Hitpoints;