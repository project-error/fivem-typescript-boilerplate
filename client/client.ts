import { myRandomData } from "./MyOther.client";

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log(myRandomData)
    console.log('TypeScript boilerplate started!')
  }
})