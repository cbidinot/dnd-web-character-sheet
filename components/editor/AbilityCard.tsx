import { useEffect, useState } from "react";
import { EditorBlockProps } from "../../lib/util";
import ObjectInputBox from "../ObjectInputBox";
import styles from "../../styles/editor/abilityCard.module.scss";

interface props extends EditorBlockProps {
    ability: string,
}

const abilityCodes = ['cha', 'con', 'dex', 'str', 'wis', 'int'];
const abilities = ['Charisma', 'Constitution', 'Dexterity', 'Strength', 'Wisdom', 'Inteligence' ];

const AbilityCard: React.FC<props> = props => {

    const [ modifier, setModifier ] = useState(0);

    useEffect(() => {
        const rawStat = props.data?.[props.ability];
        setModifier(Math.floor((rawStat - 10) / 2));
    }, [props.data?.[props.ability]])

    return (<div className={styles.abilityCard}>
        <label htmlFor={props.ability} >{`${abilities[abilityCodes.indexOf(props.ability)]}:`}</label>
        <ObjectInputBox objKey={props.ability} type="number" data={props.data?.[props.ability]} updateData={props.updateData} path='abilities' />
        <span>{modifier ? modifier > 0 ? `+${modifier}` : modifier : 0 }</span>
    </div>);
};

export default AbilityCard;