import { useState } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { quotationGetAll } from "../../storage/quotation/quotationGetAll";
import { QuotationStorageDTO } from "../../storage/storageQuotationDTO";
import { ScrollView, Text, View } from "react-native";
import { TransactionQuotation } from "../../components/TransactionQuotation";

interface Quotation {
  quotationPlace: string;
  product: string;
  // other properties
}

export function SearchQuotation() {
  const [product, setProduct] = useState("");
  const [quotationPlace, setQuotationPlace] = useState("");
  const [results, setResults] = useState<QuotationStorageDTO[]>([]);

  const handleSearch = async () => {
    const data = await quotationGetAll();

    const filteredData = data.filter((quote) => {
      if (quotationPlace && product) {
        return (
          quote.local.includes(quotationPlace) && quote.name.includes(product)
        );
      } else if (quotationPlace) {
        return quote.local.includes(quotationPlace);
      } else if (product) {
        return quote.name.includes(product);
      } else {
        return false;
      }
    });

    setResults(filteredData);
  };

  return (
    <Container>
      <Header title="Pesquisa Gastos" />

      <Input
        placeholder="Local"
        placeholderTextColor="#363F5F"
        value={quotationPlace}
        onChangeText={(value) => setQuotationPlace(value)}
      />

      <Input
        placeholder="Produto"
        placeholderTextColor="#363F5F"
        value={product}
        onChangeText={(value) => setProduct(value)}
      />

      <Button title="Pesquisa" onPress={handleSearch} />

      <ScrollView>
        {results.map((result, index) => {
          return (
            <TransactionQuotation
              key={index}
              amount={result.amount}
              date={result.dateQuotation}
              local={result.local}
              name={result.name}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
}
