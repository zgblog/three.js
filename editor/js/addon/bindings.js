import { UIButton } from "../libs/ui.js";

export class UIDatabinding extends UIButton {
    constructor(value){
        super(value)
        this.addClass('ui-databinding')
    }
}