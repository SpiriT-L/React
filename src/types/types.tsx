export interface SearchInput {
  value: string;
}

export interface Form {
  value: string;
  inputName: string;
  inputSurname: string;
  e?: number;
  inputDate: string | number;
  event?: string | null | undefined | unknown;
  inputGender?: string;
  inputSelect: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showData?: string | undefined | null | any;
}
