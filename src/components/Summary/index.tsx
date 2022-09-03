import { useContext } from 'react';
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import totalImage from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="Saidas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className='hightlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}