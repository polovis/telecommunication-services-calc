import { Products } from "types";

export const offers: Products = {
  2023: {
    year: 2023,
    standardOffer: {
      0: {
        id: 0,
        name: "Internet",
        price: 39,
      },
      1: { id: 1, name: "Telewizja", price: 49 },
      2: { id: 2, name: "Abonament telefoniczny", price: 29 },
      3: { id: 3, name: "Dekoder", price: 29 },
    },
    promo: {
      4: { id: 4, name: "internetTelewizja", price: 79 },
      5: { id: 5, name: "internetTelefon", price: 64 },
    },
  },

  2024: {
    year: 2024,
    standardOffer: {
      0: {
        id: 0,
        name: "Internet",
        price: 49,
      },
      1: { id: 1, name: "Telewizja", price: 49 },
      2: { id: 2, name: "Abonament telefoniczny", price: 29 },
      3: { id: 3, name: "Dekoder", price: 29 },
    },
    promo: {
      4: { id: 4, name: "internetTelewizja", price: 89 },
      5: { id: 5, name: "internetTelefon", price: 64 },
    },
  },
  2025: {
    year: 2025,
    standardOffer: {
      0: {
        id: 0,
        name: "Internet",
        price: 59,
      },
      1: { id: 1, name: "Telewizja", price: 59 },
      2: { id: 2, name: "Abonament telefoniczny", price: 29 },
      3: { id: 3, name: "Dekoder", price: 29 },
    },
    promo: {
      4: { id: 4, name: "internetTelewizja", price: 99 },
      5: { id: 5, name: "internetTelefon", price: 64 },
    },
  },
};
