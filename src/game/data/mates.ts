import type { Mate } from "../../types/mate";
import { Rarity } from "../../types/rarity";

export const mates: Mate[] = [

{

id:"wood",

name:"Mate de Madera",

description:"Nunca falla.",

image:"wood",

material:"Madera",

rarity:Rarity.Common

},

{

id:"calabaza",

name:"Calabaza",

description:"Tradición.",

image:"calabaza",

material:"Calabaza",

rarity:Rarity.Common,

shopPrice:200

},

{

id:"camionero",

name:"Camionero",

description:"El favorito de los materos.",

image:"camionero",

material:"Calabaza",

rarity:Rarity.Rare,

unlockLevel:20

},

{

id:"imperial",

name:"Imperial",

description:"Hecho a mano.",

image:"imperial",

material:"Cuero",

rarity:Rarity.Epic,

unlockLevel:50

}

];