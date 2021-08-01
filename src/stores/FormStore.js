import { makeAutoObservable } from "mobx";

export class FormStore {

    serviceType = ""

    constructor() {
        makeAutoObservable(this)
    }

    setServiceType(serviceType) {
        this.serviceType = serviceType
    }
}