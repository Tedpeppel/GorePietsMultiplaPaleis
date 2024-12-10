import { Car } from "../types/car";

export function renderCarList(cars: Car[]): void {
    const carListContainer = document.getElementById("car-list");
    if (!carListContainer) return;

    carListContainer.innerHTML = cars
        .map(car => `
            <p>
                ${car.brand} ${car.model} (${car.year}) - €${car.price} 
                <strong>${car.hasAPK ? "✔️ APK" : "❌ Geen APK"}</strong>
            </p>
        `)
        .join("");
}
