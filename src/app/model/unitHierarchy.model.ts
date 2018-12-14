export class UnitHierarchy {
    hierarchyImg: string
    hierarchyName: string
    sectionHierarchyUnit: string
    unitName: string                //для сортування товарів
    constructor(hierarchyImg, hierarchyName, sectionHierarchyUnit, unitName){
        this.hierarchyImg = hierarchyImg
        this.hierarchyName = hierarchyName
        this.sectionHierarchyUnit = sectionHierarchyUnit
        this.unitName = unitName
    }
}