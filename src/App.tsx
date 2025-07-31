import Faq from './components/Faq'
import ThemeToggler from './components/ThemeToggler';
import { faqsQuestions } from './constants/faqs'

function App() {

  return (
    <>
      <ThemeToggler />
      <h1 className="heading">Frequently asked questions</h1>
      {faqsQuestions.map(({ question, answer, id }) => (
        <Faq question={question} answer={answer} id={id} />
      ))}
    </>
  );
}

export default App
