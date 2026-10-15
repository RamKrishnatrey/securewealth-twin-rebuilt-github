
export function validateMobile(number:string){
  return /^\d{10}$/.test(number);
}
