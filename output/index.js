"use strict";
class RegistrationSystem {
    constructor() {
        this.vehicles = [];
    }
    static getInstance() {
        if (!RegistrationSystem.instance) {
            RegistrationSystem.instance = new RegistrationSystem();
        }
        return RegistrationSystem.instance;
    }
    addVehicle(brand, model, year, description) {
        const vehicle = {
            id: Symbol(),
            brand,
            model,
            year,
            description,
        };
        this.vehicles.push(vehicle);
        return vehicle;
    }
    removeVehicle(id) {
        const index = this.vehicles.findIndex((vehicle) => vehicle.id === id);
        if (index > -1) {
            this.vehicles.splice(index, 1);
            return true;
        }
        return false;
    }
    findVehiclesByBrand(brand) {
        return this.vehicles.filter((vehicle) => vehicle.brand === brand);
    }
    searchVehicles(keyword) {
        const lowerKeyword = keyword.toLowerCase();
        return this.vehicles.filter((vehicle) => vehicle.brand.toLowerCase().includes(lowerKeyword) ||
            vehicle.model.toLowerCase().includes(lowerKeyword) ||
            vehicle.description.toLowerCase().includes(lowerKeyword));
    }
}
const registrationSystem = RegistrationSystem.getInstance();
const vehicle1 = registrationSystem.addVehicle("Toyota", "Corolla", 2020, "Betrouwbare sedan met ruimte voor het hele gezin.");
const vehicle2 = registrationSystem.addVehicle("Ford", "Mustang", 2021, "Iconische Amerikaanse muscle car met indrukwekkende prestaties.");
const vehicle3 = registrationSystem.addVehicle("Toyota", "Prius", 2022, "Efficiënte en milieuvriendelijke hybride auto.");
const toyotaVehicles = registrationSystem.findVehiclesByBrand("Toyota");
if (toyotaVehicles.length === 0) {
    console.log("\nGeen voertuigen van dit merk gevonden.");
}
else {
    console.log("\nGevonden voertuig(en):", toyotaVehicles);
}
const onbestaandBrandVehicles = registrationSystem.findVehiclesByBrand("onbestaandBrand");
if (onbestaandBrandVehicles.length === 0) {
    console.log("\nGeen voertuigen van dit merk gevonden.");
}
else {
    console.log("\nGevonden voertuig(en):", onbestaandBrandVehicles);
}
console.log("\n");
console.log("\nZoekresultaten voor 'sedan':");
const sedanVehicles = registrationSystem.searchVehicles("sedan");
if (sedanVehicles.length > 0) {
    sedanVehicles.forEach((vehicle) => console.log(`${vehicle.brand} ${vehicle.model}: ${vehicle.description}`));
}
else {
    console.log("\nGeen voertuigen gevonden voor de zoekopdracht 'sedan'.");
}
console.log("\nZoekresultaten voor '2021':");
const vehicles2021 = registrationSystem.searchVehicles("2021");
if (vehicles2021.length > 0) {
    vehicles2021.forEach((vehicle) => console.log(`${vehicle.brand} ${vehicle.model} ${vehicle.year}`));
}
else {
    console.log("Geen voertuigen gevonden voor deze zoekopdracht.");
}
console.log("\nVoertuig 1 verwijderd:", registrationSystem.removeVehicle(vehicle1.id));
console.log("\nHuidige Voertuigen:");
const currentVehicles = registrationSystem.searchVehicles(""); // Zoek naar alle voertuigen
if (currentVehicles.length === 0) {
    console.log("\nGeen voertuigen gevonden.");
}
else {
    currentVehicles.forEach((vehicle) => {
        console.log(`${vehicle.brand} ${vehicle.model} (${vehicle.year})`);
    });
}
