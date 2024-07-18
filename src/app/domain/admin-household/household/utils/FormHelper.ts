import { HouseholdFormData } from '../AddNewHousehold';

export const initialFormData: HouseholdFormData = {
  householdPhoto: null,
  householdNumber: '',
  householdName: '',
  streetName: '',
  subdivision: '',
  zone: '',
  sitio: '',
  purok: '',
  structureMaterials: '',
  numberOfRooms: '',
  numberOfToilets: '',
  allowBoarders: null,
  hasRentalPermit: null,
  hasBackyardGarden: null,
  otherIncomeSource: '',
  numberOfPets: '',
  numberOfTwoWheeledVehicles: '',
  numberOfThreeWheeledVehicles: '',
  numberOfFourWheeledVehicles: '',
};

export const createFormData = (formData: HouseholdFormData): FormData => {
  const formDataToSend = new FormData();
  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof HouseholdFormData];
    if (value !== null && value !== undefined) {
      if (value instanceof File) {
        formDataToSend.append(key, value);
      } else {
        formDataToSend.append(key, value.toString());
      }
    }
  });
  return formDataToSend;
};
