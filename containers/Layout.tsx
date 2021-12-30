import PageHeader from "./PageHeader";


const Layout: React.FC<{}> = ({ children }) => {

    return (
        <>
            <PageHeader/>
            <main>{children}</main>
        </>
    );
}

export default Layout;