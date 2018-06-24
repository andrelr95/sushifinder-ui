import { Ingrediente } from "../models/ingredientes.model";

export const INGREDIENTES_COMIDA: Ingrediente[] = [
    new Ingrediente('Arroz', 'ingrediente', 10, true),
    new Ingrediente('Sushi', 'ingrediente', 10, true),
    new Ingrediente('Alga', 'ingrediente', 10, true)
]

export const INGREDIENTES_BEBIDA_COCA: Ingrediente[] = [
    new Ingrediente('Coca-Cola', 'bebida', 30, true)
]

export const INGREDIENTES_BEBIDA_SPRITE: Ingrediente[] = [
    new Ingrediente('Sprite', 'bebida', 30, true)
]

export const INGREDIENTES_BEBIDA_FANTA: Ingrediente[] = [
    new Ingrediente('Fanta', 'bebida', 30, true)
]

export const INGREDIENTES_BEBIDA_HEINEKEN: Ingrediente[] = [
    new Ingrediente('Heineken', 'bebida', 30, true)
]