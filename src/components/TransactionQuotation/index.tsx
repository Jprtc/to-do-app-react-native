import {
  Container,
  Description,
  Amount,
  Local,
  Footer,
  Date,
} from "./styles";

interface TransactionQuotationProps{
  name:string;
  amount: number;
  local: string;
  date: Date;
}

import { convertDateToString } from "../../utils/convertDateToString";


export function TransactionQuotation({name,amount,local,date}:TransactionQuotationProps) {
  return (
    <Container>
      <Description>{name}</Description>

      <Amount>{`R$${amount && amount.toFixed(2)}`}</Amount>

      <Footer>
        <Local>{local}</Local>
        <Date>{date && convertDateToString(date).toLocaleDateString('pt-BR')}</Date>
      </Footer>

    </Container>
  )
}
