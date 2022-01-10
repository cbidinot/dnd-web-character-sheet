import styles from '../../styles/editor/editorUtil.module.scss';
import { useAuthRequeriment } from "../../lib/auth";
import { useActiveSheet } from "../../lib/characterSheet";
import SheetHeader from '../../components/editor/SheetHeader';
import ClassLevel from '../../components/editor/ClassLevel';


export default function CharacterEditor() {

    const [ user, loading ] = useAuthRequeriment();
    const [ data, isLoaded, exception, updateData, manualUpdate ] = useActiveSheet();

    if((loading || !user ) || ((!isLoaded || !data) && !exception)) {
        return <h1>Loading...</h1>
    } else {
        return (<>
            { exception == 'permission-denied' && <h1>permission denied</h1>}
            { exception == 'missing query' && <h1>missing query</h1>}
            { isLoaded && data && <>
                <h1 className={styles.heading}>Character Editor</h1>
                <div className={styles.editor}>
                    <section>
                        <SheetHeader data={data} updateData={updateData} />
                        <ClassLevel data={data} updateData={updateData} />
                    </section>
                </div>
            </>}
        </>);
    }
};