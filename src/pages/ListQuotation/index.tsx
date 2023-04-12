import { useState, useCallback } from 'react';
import { Header } from '../../components/Header'
import { TransactionQuotation } from '../../components/TransactionQuotation'
import { QuotationStorageDTO } from '../../storage/storageQuotationDTO';
import {
  Container,
  Transactions
} from './styles'
import { ScrollView, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { quotationGetAll } from '../../storage/quotation/quotationGetAll';

export function ListQuotation() {

  const [data, setData] = useState<QuotationStorageDTO[] | null>(null);

  async function loadData(){
    const newData = await quotationGetAll();

    newData.sort((a,b) => {
      return b.dateQuotation < a.dateQuotation ? -1 : b.dateQuotation > a.dateQuotation ? 1 : 0
    })

    console.log(newData)
    setData(newData);
  }

  useFocusEffect(useCallback(() =>{
    loadData()
  },[]))


  if(data){
    return (
      <Container>
        <Header title='Listagem de Cotação' />
  
        <Transactions>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((info,index) =>{
            return (
              <TransactionQuotation key={index} amount={info.amount} name={info.name} date={info.dateQuotation} local={info.local} />
            )
          })}
          
        </ScrollView>
  
        </Transactions>
      </Container>
    )
  } else{
    return (
      <Container>
        <Header title="Listagem de Cotação" />
        <Text>Não foram encontrados informações</Text>
      </Container>
    )
  }
  
}
