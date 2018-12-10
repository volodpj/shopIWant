export class Item{
    name: string;
    imgGoods: string;
    id: number;
    availability: boolean;      //наявність
    price: number;
    description: string;
    producer: string;           //виробник
    sectionHierarchy: string;   //розділ
    unitHierarchy: string;      //підрозділ
    topTrade: boolean;
    priceWeek: boolean;
    recommendations: boolean;
    newItem: boolean;
    constructor(name, imgGoods, id, availability, price, description, producer, sectionHierarchy, unitHierarchy,
        topTrade, priceWeek, recommendations, newItem){
        this.name = name;
        this.imgGoods = imgGoods;
        this.id = id;
        this.availability = availability;
        this.price = price;
        this.description = description;
        this.producer = producer;
        this.sectionHierarchy = sectionHierarchy;
        this.unitHierarchy = unitHierarchy;
        this.topTrade = topTrade;
        this.recommendations = recommendations;
        this.priceWeek = priceWeek;
        this.newItem = newItem;
    }
}