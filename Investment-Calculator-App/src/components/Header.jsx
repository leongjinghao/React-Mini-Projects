import investmentCalculatorImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentCalculatorImg} alt="Investment Calculator Logo"></img>
      <h1>React Investment Calculator</h1>
    </header>
  );
}
