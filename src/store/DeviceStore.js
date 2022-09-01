import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types = [
            {id:1, name: "Холодильники"},
            {id:2, name: "Телефоны"},
            {id:3, name: "Смартфоны"}
        ]
        this._brands = [
            {id:1, name: "LG"},
            {id:2, name: "Apple"},
            {id:3, name: "Samsung"}
        ]
        this._devices = [
            {id:1, name: "Galaxy S22", price:1049,brandId:3, typeId:2},
            {id:2, name: "Galaxy S23", price:1049,brandId:3, typeId:2},
            {id:3, name: "Phone 13", price:1049,brandId:2, typeId:2}
        ]
        
        makeAutoObservable(this)
    }

    setType(types){
        this._types = types
    }

    setBrand(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }

    
}