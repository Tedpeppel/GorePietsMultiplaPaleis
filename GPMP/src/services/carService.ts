import { Car } from "../types/car";

const carList: Car[] = [];

export function addCar(car: Car): void {
    carList.push(car);
    console.log(`Auto toegevoegd: ${car.brand} ${car.model}, APK: ${car.hasAPK ? "Ja" : "Nee"}`);
}

export function getCars(): Car[] {
    return carList;
}
