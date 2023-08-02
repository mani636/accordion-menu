import data from './data';
import Question from './components/Question';
import { useState } from 'react';

const App = () => {
  const [questions, setQuestion] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Frequently asked Interview questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
