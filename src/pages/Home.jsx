import Calendar from "../Components/Calendar";
import List from "../Components/List";
import Layout from "../Components/Layout";
import FormSection from "../Components/FormSection";

function Home() {

    return (
        <>
            <Layout>
                <FormSection />
                <Calendar />
                <List />
            </Layout>
        </>
    );
}

export default Home;