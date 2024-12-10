import { addCar, getCars } from "./services/carService.js";
import { renderCarList } from "./ui/ui.js";

addCar({ id: 1, brand: "Fiat", model: "Multipla", year: 2003, price: 1500, hasAPK: true });
addCar({ id: 2, brand: "Fiat", model: "Multipla", year: 2005, price: 2000, hasAPK: false });
addCar({ id: 3, brand: "Harry's houthandel", model: "Multiplex", year: 1999, price: 20, hasAPK: false });
addCar({ id: 4, brand: "Fiat", model: "Multipla", year: 2019, price: 20.000, hasAPK: true });

function setupFormHandler (): void {
    const form = document.getElementById("car-form") as HTMLFormElement;

    if (!form) { 
        console.error("Formulier niet gevonden");
        return;
    
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const brand = (document.getElementById("brand") as HTMLInputElement).value;
        const model = (document.getElementById("model") as HTMLInputElement).value;
        const year = parseInt((document.getElementById("year") as HTMLInputElement).value,);
        const price = parseFloat((document.getElementById("price") as HTMLInputElement).value);
        const hasAPK = (document.getElementById("hasAPK") as HTMLSelectElement).value === "true";

        const newCar = {
            id: Date.now(),
            brand,
            model,
            year,
            price,
            hasAPK,
        };

        addCar(newCar);
        renderCarList(getCars());

        form.reset;
    } );
}

setupFormHandler();
renderCarList(getCars());
