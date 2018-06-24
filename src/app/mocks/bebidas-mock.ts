import { Bebida } from '../models/bebida.model';
import { INGREDIENTES_BEBIDA_COCA, INGREDIENTES_BEBIDA_FANTA, INGREDIENTES_BEBIDA_HEINEKEN, INGREDIENTES_BEBIDA_SPRITE } from './ingredientes-mock';

export const BEBIDAS: Bebida[] = [
    new Bebida('Coca-Cola', 5, true, 'bebida', '../../assets/img/Coca.png', INGREDIENTES_BEBIDA_COCA),
    new Bebida('Fanta', 5, true, 'bebida', '../../assets/img/fanta.png', INGREDIENTES_BEBIDA_FANTA),
    new Bebida('Heineken', 5, true, 'bebida', '../../assets/img/heineken.png', INGREDIENTES_BEBIDA_HEINEKEN),
    new Bebida('Sprite', 5, true, 'bebida', '../../assets/img/sprite.png', INGREDIENTES_BEBIDA_SPRITE)
];