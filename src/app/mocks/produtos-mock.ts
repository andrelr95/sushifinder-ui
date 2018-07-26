import { Comida } from '../models/comida.model';
import { INGREDIENTES_COMIDA, INGREDIENTES_TEMAKI, INGREDIENTES_SASHIMI } from './ingredientes-mock';
import { Bebida } from '../models/bebida.model';
import { INGREDIENTES_BEBIDA_COCA, INGREDIENTES_BEBIDA_FANTA, INGREDIENTES_BEBIDA_HEINEKEN, INGREDIENTES_BEBIDA_SPRITE } from './ingredientes-mock';
import { Produto } from '../models/produto.model';

export const COMIDAS: Comida[]  = [
    new Comida(1, 'Temaki', 20, true, 'comida', '../../assets/img/temaki.png', INGREDIENTES_TEMAKI),
    new Comida(2, 'Hossomaki', 10, true, 'comida', '../../assets/img/hossomaki.png', INGREDIENTES_TEMAKI),
    new Comida(3, 'Uramaki', 8, true, 'comida', '../../assets/img/uramaki.png', INGREDIENTES_TEMAKI),
    new Comida(4, 'Sashimi (Porção)', 20.75, true, 'comida', '../../assets/img/Sashimi.png', INGREDIENTES_SASHIMI),
]

export const BEBIDAS: Bebida[] = [
    new Bebida(5, 'Coca-Cola', 5, true, 'bebida', '../../assets/img/Coca.png', INGREDIENTES_BEBIDA_COCA),
    new Bebida(6, 'Fanta', 5, true, 'bebida', '../../assets/img/fanta.png', INGREDIENTES_BEBIDA_FANTA),
    new Bebida(7, 'Heineken', 5, true, 'bebida', '../../assets/img/heineken.png', INGREDIENTES_BEBIDA_HEINEKEN),
    new Bebida(8, 'Sprite', 5, true, 'bebida', '../../assets/img/sprite.png', INGREDIENTES_BEBIDA_SPRITE)
]

// export const PRODUTOS: Produto[] = [
//     new Comida('Temaki', 20, true, 'comida', '../../assets/img/temaki.png', INGREDIENTES_TEMAKI),
//     new Comida('Hossomaki', 10, true, 'comida', '../../assets/img/hossomaki.png', INGREDIENTES_TEMAKI),
//     new Bebida('Coca-Cola', 5, true, 'bebida', '../../assets/img/Coca.png', INGREDIENTES_BEBIDA_COCA),
//     new Bebida('Fanta', 5, true, 'bebida', '../../assets/img/fanta.png', INGREDIENTES_BEBIDA_FANTA),
// ]

