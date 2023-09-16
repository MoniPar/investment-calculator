import logo from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Foreground: a green bag with a dollars symbol.  Background: Brown/Orange vertical bars" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
