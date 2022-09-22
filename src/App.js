import './App.scss';
import SignUpController from './components/signup/SignUpController';
import Header from './components/header/view/Header.jsx';

function App() {
  return (
    <div className="rabobank-app" data-testid="rabobank-app">
      <Header />
      <main>
        <SignUpController />
      </main>
    </div>
  );
}

export default App;
