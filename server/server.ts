import { myRandomData } from "./MyOther.server";

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript boilerplate started!");
    console.log(myRandomData);
  }
});
