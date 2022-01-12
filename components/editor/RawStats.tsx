import { EditorBlockProps } from "../../lib/util";
import styles from '../../styles/editor/rawStats.module.scss';
import SimpleInputBox from "../SimpleInputBox";
import AbilityCard from "./AbilityCard";

const abilityCodes = ['cha', 'con', 'dex', 'str', 'wis', 'int'];

const RawStat: React.FC<EditorBlockProps> = props => {

    return (<div className={styles.rawStats}>
        <h3 className={styles.header}>Stats</h3>

        <div className={styles.inputModule}>
            <label htmlFor='armorClass'>Armor Class:</label>
            <SimpleInputBox type='number' data={props.data.armorClass} updateData={props.updateData} name='armorClass' />
        </div>

        <div className={styles.inputModule}>
            <label htmlFor='initiative' >Initiative:</label>
            <SimpleInputBox type='number' data={props.data.initiative} updateData={props.updateData} name='initiative' />
        </div>

        <div className={styles.inputModule}>
            <label htmlFor='speed'>Speed:</label>
            <SimpleInputBox data={props.data.speed} updateData={props.updateData} name='speed' />
        </div>

        <div className={styles.inputModule}>
            <label htmlFor='perception'>Perception:</label>
            <SimpleInputBox data={props.data.perception} updateData={props.updateData} name='perception' type="number"/>
        </div>
        
        <div id={styles.inspiration} >
            <label htmlFor='inspiration'>Inspiration:</label>
            <input type='checkbox' name='inspiration' id='inspiration' />
        </div>

        <div className={styles.abilities}>
            <h4> Abilities </h4>
            {abilityCodes.map((abilityCode) => <AbilityCard data={props.data.abilities} updateData={props.updateData} ability={abilityCode} /> )}
        </div>

    </div>);
};

export default RawStat;