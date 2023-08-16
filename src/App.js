import data from './data';
import Question from './components/Question';

const App = () => {
  return (
    <main>
      <div className='container'>
        <h3>Frequently asked Interview questions</h3>
        <section className='info'>
          {data.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
