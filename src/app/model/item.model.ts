export class Item{
    name: string;
    id: number;
    availability: boolean;
    price: number;
    description: string;
    producer: string;
    sectionHierarchy: string;
    unitHierarchy: string;
    topTrade: boolean;
    priceWeek: boolean;
    recommendations: boolean;
    newItem: boolean;
    constructor(name, id, availability, price, description, producer, sectionHierarchy, unitHierarchy,
        topTrade, priceWeek, recommendations, newItem){
        this.name = name;
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