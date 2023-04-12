import AsyncStorage from "@react-native-async-storage/async-storage";
import { QuotationStorageDTO } from '../storageQuotationDTO';
import { QUOTATION_COLLECTION } from "../storageConfig";

export async function quotationGetAll() {
  try {
    const storage = await AsyncStorage.getItem(QUOTATION_COLLECTION)
    console.log(storage)

    const spending: QuotationStorageDTO[] =
      storage ? JSON.parse(storage) : []

    return spending

  } catch (error) {
    console.log('Error fetching data',error)
    throw error;
  }
}