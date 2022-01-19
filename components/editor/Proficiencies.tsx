import { EditorBlockProps } from "../../lib/util";
import styles from "../../styles/editor/proficiencies.module.scss";
import SimpleInputBox from "../SimpleInputBox";
import ProficiencySelector from "./ProficiencySelector";

const abilities = ['Charisma', 'Constitution', 'Dexterity', 'Strength', 'Wisdom', 'Inteligence' ];
const skills = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance',
'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'];

const Proficiencies: React.FC<EditorBlockProps> = props => {

    return (<div className={styles.proficiencies} >
        <h3 className={styles.header}>Proficiencies</h3>

        <div className={styles.inputModule}>
            <label htmlFor='proficiencyBonus'>Proficiency Bonus:</label>
            <SimpleInputBox type='number' name='proficiencyBonus' updateData={props.updateData} data={props.data.proficiencyBonus} />
        </div>

        <div className={styles.subsection}>
            <h4>Saving Throws</h4>
            {abilities.map(e => <ProficiencySelector data={props.data.savingThrowProficiencies} updateData={props.updateData} proficiencyType='savingThrowProficiencies' proficiency={e} />)}
        </div>

        <div className={styles.subsection}>
            <h4>Skills</h4>
            {skills.map(e => <ProficiencySelector data={props.data.skillProficiencies} updateData={props.updateData} proficiencyType='skillProficiencies' proficiency={e} />)}
        </div>

    </div>);
};

export default Proficiencies;