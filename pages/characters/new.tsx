import { DocumentData } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';
import { useAuthRequeriment } from '../../lib/auth';
import { initCharacter } from '../../lib/buildingSheets';
import styles from '../../styles/pages/newCharacter.module.scss';

export default function NewCharacter() {

    const router = useRouter();
    const [ user, loading] = useAuthRequeriment();
    const [ data, setData ] = useState<DocumentData>({});

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if(user && data) {
            setData({...data, multiclass: false}) 
            initCharacter(user.uid, data)
                .then((id) => {
                    if(id) {
                      router.push(`/characters/editor?id=${id}`);  
                    }
                    
                });
        }
    };

    if( loading || !user ) {return <h1>Loading...</h1>} else {

        return (<div className={styles.newCharacter} >
            <h1>Create a new character!</h1>
            <form onSubmit={handleSubmit} > 
                <label htmlFor='characterName' >Character Name:</label>
                <input type='text' name='name' id='characterName' autoComplete='off' spellCheck='false' 
                autoCorrect='off' required={true} value={data.name ? data.name : ''} onChange={(e) => {setData({...data, name: e.target.value})}}></input>

                <label htmlFor='race' >Race:</label>
                <input type='text' name='race' id='race' autoComplete='off' spellCheck='false' 
                autoCorrect='off' value={data.race ? data.race : ''} onChange={(e) => {setData({...data, race: e.target.value})}}></input>

                <input type='submit' value='Start!' id={styles.submit} ></input>
            </form>
        </div>);    
    };
};