import Calendar from '../Components/Calendar';
import List from '../Components/List';
import Layout from '../Components/Layout';
import FormSection from '../Components/Form';

function Home({ clickedMonthBtn, handleClick }) {
  return (
    <Layout>
      <FormSection />
      <Calendar clickedMonthBtn={clickedMonthBtn} handleClick={handleClick} />
      <List />
    </Layout>
  );
}

export default Home;
