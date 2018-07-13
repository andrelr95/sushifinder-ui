import { Comida } from '../models/comida.model';
import { INGREDIENTES_COMIDA, INGREDIENTES_TEMAKI, INGREDIENTES_SASHIMI } from './ingredientes-mock';
import { Bebida } from '../models/bebida.model';
import { INGREDIENTES_BEBIDA_COCA, INGREDIENTES_BEBIDA_FANTA, INGREDIENTES_BEBIDA_HEINEKEN, INGREDIENTES_BEBIDA_SPRITE } from './ingredientes-mock';

export const COMIDAS: Comida[]  = [
    new Comida('Temaki', 20, true, 'comida', '../../assets/img/temaki.png', INGREDIENTES_TEMAKI),
    new Comida('Hossomaki', 10, true, 'comida', '../../assets/img/hossomaki.png', INGREDIENTES_TEMAKI),
    new Comida('Uramaki', 8, true, 'comida', '../../assets/img/uramaki.png', INGREDIENTES_TEMAKI),
    new Comida('Sashimi (Porção)', 20.75, true, 'comida', '../../assets/img/Sashimi.png', INGREDIENTES_SASHIMI),
]

export const BEBIDAS: Bebida[] = [
    new Bebida('Coca-Cola', 5, true, 'bebida', '../../assets/img/Coca.png', INGREDIENTES_BEBIDA_COCA),
    new Bebida('Fanta', 5, true, 'bebida', '../../assets/img/fanta.png', INGREDIENTES_BEBIDA_FANTA),
    new Bebida('Heineken', 5, true, 'bebida', '../../assets/img/heineken.png', INGREDIENTES_BEBIDA_HEINEKEN),
    new Bebida('Sprite', 5, true, 'bebida', '../../assets/img/sprite.png', INGREDIENTES_BEBIDA_SPRITE)
];
