import styles from '../styles/components/pageHeader.module.scss';

const PageHeader: React.FC<{type: string}> = props => {

    return (
        <header className={`${styles.pageHeader} ${styles[props.type]}`}>
            {props.children}
        </header>
    );
};
export default PageHeader;