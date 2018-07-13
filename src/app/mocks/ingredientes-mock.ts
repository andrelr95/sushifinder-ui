import { Ingrediente } from "../models/ingredientes.model";

export const INGREDIENTES: Ingrediente[] = [
    new Ingrediente('Arroz', 'ingrediente', 10, true),
    new Ingrediente('Alga', 'ingrediente', 20, true),
    new Ingrediente('Salmão', 'ingrediente', 40, true),
    new Ingrediente('Shoyu', 'ingrediente', 60, true),
    new Ingrediente('Karashi', 'ingrediente', 10, true),
    new Ingrediente('Saquê Mirin', 'ingrediente', 10, true),
    new Ingrediente('Vinagre de Arroz', 'ingrediente', 10, true),
    new Ingrediente('Missô', 'ingrediente', 10, true),
    new Ingrediente('Wasabi', 'ingrediente', 10, true),
    new Ingrediente('Coca-Cola', 'bebida', 10, true),
    new Ingrediente('Fanta', 'bebida', 10, true),
    new Ingrediente('Heineken', 'bebida', 10, true),
    new Ingrediente('Schweppes', 'bebida', 10, true),
    new Ingrediente('Água sem gás', 'bebida', 10, true),
    new Ingrediente('Água com gás', 'bebida', 10, true)
]

export const INGREDIENTES_COMIDA: Ingrediente[] = [
    new Ingrediente('Arroz', 'ingrediente', 10, true),
    new Ingrediente('Sushi', 'ingrediente', 10, true),
    new Ingrediente('Alga', 'ingrediente', 10, true),
]

export const INGREDIENTES_TEMAKI: Ingrediente[] = [
    new Ingrediente('Alga', 'ingrediente', 20, true),
    new Ingrediente('Salmão', 'ingrediente', 40, true),
    new Ingrediente('Arroz', 'ingrediente', 10, true),
]

export const INGREDIENTES_SASHIMI: Ingrediente[] = [
    new Ingrediente('Salmão', 'ingrediente', 40, true),
    new Ingrediente('Arroz', 'ingrediente', 10, true),
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