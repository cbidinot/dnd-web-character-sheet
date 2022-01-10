import { ChangeEventHandler, useEffect, useState } from "react";
import { EditorBlockProps } from "../../lib/util";
import styles from '../../styles/editor/classLevel.module.scss';
import ClassCard from "./ClassCard";
import SimpleInputBox from "../SimpleInputBox";

const ClassLevel: React.FC<EditorBlockProps> = props => {


    const toggleMulticlass: ChangeEventHandler<HTMLInputElement> = (e) => {

        props.updateData('multiclass', e.target.checked );

        if(props.data.multiclass && props.data.classes == []) {
            props.updateData('classes', [{class: props.data.singleClass, level: props.data.singleLevel}]);
        } else if(!props.data.multiclass) {

        }
    };

    const addClass = () => {
        const newArr: {}[] = props.data.classes;
        newArr.push({class: '', level: 1});
        props.updateData('classes', newArr);
    };

    return (<div className={styles.classLevel} >
        <h3 className={styles.header}>Class and Level</h3>

        {props.data.multiclass ? 
        <>
            <div className={styles.multiclassContainer}>

                {props.data.classes ? props.data.classes.map((element: {class: string, level: number}, index: number) => {
                return <ClassCard data={props.data.classes} updateData={props.updateData} index={index} key={index} />
                }) : null }

            </div>
            <button className={styles.addClass} onClick={addClass} >Add Class</button>
        </>
        
        :
        <>
            <div className={styles.inputModule}>
                <label htmlFor="singleClass">Class:</label>
                <SimpleInputBox name='singleClass' data={props.data.singleClass} updateData={props.updateData} />
            </div>

            <div id={styles.singleNumber} className={styles.inputModule}>
                <label htmlFor="singleLevel">Level:</label>
                <SimpleInputBox name="singleLevel" type='number' data={props.data.singleLevel} updateData={props.updateData} />
            </div>

        </>}
        <div className={styles.checkmarkSelectors}>
            <div>
                <label htmlFor="multiclass">Multiclass?</label>
                <input type='checkbox' name="multiclass" id="multiclass" onChange={toggleMulticlass} checked={props.data.multiclass} ></input>
            </div>

            <div>
                <label htmlFor="useXp">Use XP?</label>
                <input type='checkbox' name="useXp" id="useXp" onChange={(e) => {props.updateData('useXp', e.target.checked)}} checked={props.data.useXp} ></input>
            </div>  

        </div>

        { props.data.useXp ? 
            <div className={styles.inputModule}>
                <label htmlFor="xp">XP:</label>
                <SimpleInputBox name="xp" type='number' data={props.data.xp} updateData={props.updateData} />
            </div>

        : null }
    </div>);
}

export default ClassLevel;