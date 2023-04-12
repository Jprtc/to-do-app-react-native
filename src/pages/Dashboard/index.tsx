import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container } from './styles'
import { InputAmount } from '../../components/InputAmount'
import { InputDate } from '../../components/InputDate'
import { formatAmount } from '../../utils/formatAmount'
import { convertDate } from '../../utils/convertDate'
import { quotationCreate } from '../../storage/quotation/quotationCreate'
import { ScrollView, Text } from "react-native";
export function Dashboard() {

  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState('')
  const [quoteDate, setqQuoteDate] = useState('')
  const [quotationPlace, setQuotationPlace] = useState('')

  const sendData = async () =>{
    console.log('initialDate:',quoteDate)
    const createdData = {
      name:product,
      amount: formatAmount(amount),
      dateQuotation: convertDate(quoteDate),
      local:quotationPlace
    }
    await quotationCreate(createdData)
    console.log(createdData)
    setProduct('')
    setAmount('')
    setqQuoteDate('')
    setQuotationPlace('')
  }

  // const handleDateMask = (text: string) => {
  //   const maskedText = text.replace(/[^0-9]/g, ""); // Remove all non-numeric characters
  //   // Validate when input is totally filled.
  //   if (maskedText.length === 8) {
  //     // Check if the masked input value is valid
  //     const day = parseInt(maskedText.slice(0, 2));
  //     const month = parseInt(maskedText.slice(2, 4));
  //     const year = parseInt(maskedText.slice(4, 8));
  //     const lastDayOfMonth = new Date(year, month -1, 0).getDate(); // Get the last day of the month
  //     let correctedDay = day;
  //     let correctedMonth = month;
      
  //     if (day > lastDayOfMonth) {
  //       correctedDay = lastDayOfMonth;
  //     }
  //     if (month > 12) {
  //       correctedMonth = 12;
  //     }
  //     // Format the date string and update the state
  //     const formattedDate = `${correctedDay}/${correctedMonth}/${year}`;
  //     setqQuoteDate(maskedText);
  //   }
  // };

  return (
    <Container
    >
      <Header title='Cotação de Valores' />

      
    <ScrollView>
      <Input
        placeholder='Nome do Produto'
        placeholderTextColor='#363F5F'
        value={product}
        onChangeText={value => setProduct(value)}
      />

      <InputAmount
        placeholder='Valor'
        placeholderTextColor='#363F5F'
        value={amount}
        onChangeText={value => setAmount(value)}
      />

      <InputDate
        placeholder='Data Cotação'
        placeholderTextColor='#363F5F'
        value={quoteDate}
        onChangeText={value => setqQuoteDate(value)}
      />

      <Input
        placeholder='Local da Cotação'
        placeholderTextColor='#363F5F'
        value={quotationPlace}
        onChangeText={value => setQuotationPlace(value)}
      />

      <Button
        title='Adicionar'
        onPress={sendData}
      />
      </ScrollView>

    </Container>
  )
}