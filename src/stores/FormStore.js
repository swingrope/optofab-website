import { makeAutoObservable } from "mobx";

export class FormStore {

    serviceType = ""
    componentCount = 0

    constructor() {
        makeAutoObservable(this)
    }

    setServiceType(serviceType) {
        this.serviceType = serviceType
        this.componentCount = 1
    }

    addNewPart() {
        this.componentCount++
    }
}