// productrecomendamos.js
const productListRecomendamos = document.getElementById('product-listrecomendamos');

// Ejemplo de productos recomendados
const productsRecomendados = [
    {
        name: 'GUSANACUR ®',
        imageSrc: 'img/otro/gusanacur.png',
        descripProdu: '<h3>Indicaciones:</h3><br>En Bovinos, Porcinos, Ovinos, Caprinos, Equinos, Caninos y Búfalos. Para el control y tratamiento de Miasis en heridas producidas por cortes, cirugías, descornes, castraciones, marcajes, desinfección de ombligo en recién nacidos. Como coadyuvante en la cicatrización de heridas.<h3>Dosis y Administración:</h3><br>Sólo uso tópico. Dirija la válvula hacia el sitio afectado a unos 30 cm de distancia y presione rociando el producto hasta cubrir totalmente el área afectada.<h3>Composición y especies:</h3> Cada 100 cm³ contienen: Clorofilos 5 g Aceite de pino 10 g Aceite de citronela 3 g Violeta de genciana 4 g Excipientes c.s.p. 100 ml Gas Propelente'
    },
    {
        name: 'AMIGAR ®',
        imageSrc: 'img/otro/AMIGAR.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Amigar es un baño Garrapaticida, componente de baja toxicidad para mamiferos. Producto tóxico para peces.<h3>Dosis y Administración:</h3><br>Únicamente para uso externo. Diluir 25 ml del producto en 20 litros de agua, mojar bien el animal y dejar que seque. Repetir a los 15 - 30 días contra garrapatas y contra la sarna una vez por semana hasta su curación. Preparar la solución inmediatamente antes de usarla y mantener el envase bien cerrado en un lugar fresco.<h3>Composición y especies:</h3> Cada 100 cm³ contienen: Amitraz 12.5 g Excipientes c.s.p. 100 ml'
    },
    {
        name: 'CIPERMEDI ®',
        imageSrc: 'img/otro/CIPERMEDI.png',
        descripProdu: '<h3>Indicaciones:</h3><br>En el combate de los ectoparásitos que atacan a los bovinos e instalaciones avícolas. Tórsalo, o larvas de Dermafobia hominis. Moscas de los géneros Stomoxys calcitrans, Musca domestica, Haemofobia irritans - adultos; Dermafobia hominis - adultos y larva. Piojos de los géneros Linognathus vituli, Haematopinos eurysternus, Bovícola bovis, Solenopotes capillatus - adultos.<h3>Dosis y Administración:</h3><br>Únicamente para uso externo. Bovinos: 25 ml por cada 20 litros de agua. Diluir en la concentración indicada, agitar hasta la completa homogenización del baño. Bañar toda la superficie del animal, especialmente las regiones más infectadas, como papada, entrepiernas, orejas, etc. Usar aproximadamente 5 litros de baño por bovino adulto. Instalaciones avícolas: se utiliza un promedio de 1000 litros de la solución de Cipermedi para la fumigación de una instalación avícola de 1.200 m2. Recomienda un periodo de 48 horas para la recuperación del galpón por las aves.<h3>Composición y especies:</h3> Cada 100 cm³ contienen: Cipermetrina 15 g Cipertrifos 25 g Citronela 1 g Excipientes CSP 100 ml'
    },
    {
        name: 'TINTURA DE YODO',
        imageSrc: 'img/otro/TINTURA.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Germicida, Fungicida para desinfección de piel y curación de lesiones superficiales (heridas) en bovinos, equinos, porcinos, felinos, caninos, ovinos y caprinos.<h3>Dosis y Administración:</h3><br>Solución antiséptica de uso tópica. Aplicar de una a dos gotas sobre la lesión.<h3>Composición y especies:</h3><br>Cada 100 ml. contiene: Yodo Resublimado 2,50 g Yoduro de Potasio 1,66 g Excipientes c.s.p. 100 ml Bovinos, Equinos, Porcinos, Felinos, Caninos, Ovinos Y Caprinos.'
    },
    {
        name: 'GEL MATAGUSANOS EQ 335',
        imageSrc: 'img/otro/GEL.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Está indicado para ayudar a prevenir las infecciones en las heridas de los animales, y para el tratamiento local de infestaciones por larvas de gusano de monte. Tiene acción cicatrizante, repelente, insecticida y bactericida.<h3>Dosis y Administración:</h3><br>Tópica, aplicar mediante hisopo o brocha.<h3>Composición y especies:</h3><br>Ingredientes activos: 0.0 diethyl 0-3.5.6 trichol-2 pyridyl phosphorothioate a 96.5% 5% Aceite de pino 35% Ingredientes inertes 60% Bovino, equinos, caprinos, ovinos, porcinos, y caninos.'
    },
    {
        name: 'SULARZIN POMADA',
        imageSrc: 'img/otro/SULFATIAZOL.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Antimicrobiano, Suavizante, Cicatrizante, Antiflogístico. Pomada contra la chinela, mastitis, heridas y úlceras de todas clases.<h3>Dosis y Administración:</h3><br>Aplíquese en toda la parte afectada o inflamada todos los días, masajeando hasta su completa absorción, de preferencia por la tarde hasta que desaparezca la afección.<h3>Composición y especies:</h3><br>Cada 100g contiene: Sulfatiazol 3,5 g Iodoclorohidroxiquinoleina 1,5 g Óxido de Zinc 3,5 g Cresol 0,5 g Aceite Hígado de Bacalao 10 ml Excipientes c.s.p. 100 g'
    },
    {
        name: 'POMADA YODOYODURADA',
        imageSrc: 'img/otro/POMADA.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Por su acción antiflogística y analgésica es un valioso auxiliar del tratamiento específico contra la mastitis (inflamación de la ubre), contusiones e inflamaciones de origen no específico.<h3>Dosis y Administración:</h3><br>Bovinos, Equinos, Ovinos y Caninos aplíquese la cantidad necesaria libremente en la parte afectada o inflamada hasta cubrirla mediante un ligero masaje. Repítase la cura todos los días.<h3>Composición y especies:</h3><br>Cada 100g contiene: Yodo Resublimado 2 g Yoduro de Potasio 2 g Alcanfor 1 g Salicilato de Metilo 1 ml Excipientes c.s.p. 100 g Bovinos, Equinos, Ovinos y Caninos.'
    },
    {
        name: 'SAL-IO-CAN',
        imageSrc: 'img/otro/SALIOCAN.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Procesos infecciosos piógenos, Flemones, ulceras de la Boca y Pezuñas (Chinelas), Cojeras.<h3>Dosis y Administración:</h3><br>Subcutánea o Intramuscular. Bovinos: 20 ml. Caprinos, Ovinos y Porcinos: 10 ml. Tiempo de Retiro: Retiro en carne 28 días y retiro en leche 8 días. Esta dosis puede modificarse según criterio del Médico Veterinario. DOSIS TERAPÉUTICA: 50-100 mg/kpv/día.<h3>Composición y especies:</h3><br>Cada 100ml contiene: Yodo metaloide 1,57 g loduro de Potasio 1,43 g Alcanfor 4,3 g Ácido Acetilsalicilico 7,14 g Vehículo c.s.p. 100 ml Bovinos, Porcinos, Ovinos y Caninos.'
    },
    {
        name: 'GLUCONATO DE CALCIO',
        imageSrc: 'img/otro/GLUCONATO.png',
        descripProdu: '<h3>Indicaciones:</h3><br>El Gluconato de Calcio está indicado en estado de descalificación y carencia cálcica, raquitismo, estados tetánicos, osteomalacia, fracturas, fiebre de leche, hemorragias, eclampsia.<h3>Dosis y Administración:</h3><br>Vía endovenosa muy lentamente (60 gotas por minuto). Bovinos y Equinos: 250 ml – 500 ml Ovinos, Caprinos y Porcinos: 100 ml – 250 ml. Caninos: 20 ml – 50 ml. Esta dosis puede ser modificada por el Médico Veterinario. DOSIS TERAPÉUTICA: 25 a 75 mg/kg.<h3>Composición y especies:</h3><br>Cada 100ml contiene: Gluconato de Calcio 16 g Ácido Bórico 3.2 g Excipientes c.s.p. 100 ml Bovinos, Equinos, Porcinos, Ovinos y Caninos.'
    },
    {
        name: 'COAGULANTE CHINFIELD',
        imageSrc: 'img/otro/COAGULANTE.png',
        descripProdu: '<h3>Indicaciones:</h3><br>Prevención y tratamiento de hemorragias de cualquier etiología y localización.<h3>Dosis y Administración:</h3><br>Intramuscular lenta. Equinos – Bovinos: 2 ml a 4 ml cada 100 kpv o según criterio del veterinario. Caninos – Felinos: 0,25 ml cada 5 kg de peso, o según criterio del veterinario. Repetir una o más veces por día hasta que cese la hemorragia. DOSIS TERAPÉUTICA: 1 mg/kg.<h3>Composición y especies:</h3><br>Ciclonamina (etamsilato) 15 g Vitamina K ₁ 50 mg Agentes de formulación c.s.p. 100 ml. Equinos no destinados a consumo alimentario humano, bovinos, caninos y felinos.'
    },
    
];




// Agregar cada producto al DOM
productsRecomendados.forEach(product => {
    const productElement = createProduct(product.name, product.imageSrc, product.descripProdu);
    productListRecomendamos.appendChild(productElement);
});


