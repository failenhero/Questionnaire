export default interface Form {
  name: string,
  age: number,
  familyState: string,
  university: string,
  otherUniversities?: [string],
  birthPlace: string,
  checkedAbilities?: [
    {
      id: number,
      text: string,
      checked: boolean
    }
  ]


}
