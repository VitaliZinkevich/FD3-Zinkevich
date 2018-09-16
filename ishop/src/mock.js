//Создать проект ishop (интернет-магазин) в папке ishop. 
//Задать массивом список товаров в интернет-магазине, по каждому
// товару должны храниться как минимум название, цена, 
//URL фотографии, сколько единиц товара осталось на складе. 
//Написать React-компонент, отображающий таблицу с этим списком 
//товаров. Компонент должен получать массив товаров через props. 
//Задать типы для props компонента. При разработке компонента 
//максимально использовать forEach и другие методы обработки 
//массивов.


     let data = [
        {name: 'Шорты', 
        price: 10, 
        fotos: ['https://cdn.sptmr.ru/upload/resize_cache/iblock/664/331_394_1/11874060299.jpg',
        'https://cdn.sptmr.ru/upload/resize_cache/iblock/443/331_394_1/12247150299.jpg'], 
        left: 100, 
        ID: 4820024700016},
        
        {name: 'Майки', 
        price: 15, 
        fotos: ['https://www.reebok.ru/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwf6036db1/zoom/CW7182_01.jpg?sw=2000',
        'https://images.ua.prom.st/312528078_w640_h640_pesok_4.jpg'], 
        left: 100, 
        ID: 4820024700017},
         
        ];

export default { data }; 

