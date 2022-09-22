import './style.scss';

function Header() {
  return (
    <header className="rabobank-app--header">
        <img src="https://www.rabobank.com/en/images/rabobank-logo68x80.jpg" className="rabobank-app--header--logo" alt="rabologo" />
        <span className="rabobank-app--header--text">Rabobank</span>
    </header>
  );
}

export default Header;
