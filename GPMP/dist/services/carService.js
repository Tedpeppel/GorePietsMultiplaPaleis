const carList = [];
export function addCar(car) {
    carList.push(car);
    console.log(`Auto toegevoegd: ${car.brand} ${car.model}, APK: ${car.hasAPK ? "Ja" : "Nee"}`);
}
export function getCars() {
    return carList;
}
