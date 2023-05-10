import {Procedure} from "./procedure";

export class Appointment {


    public id! : number;
    public animal!:string;
    public date!:string;
    public time!:string;
    public doctorName!:string;
    public diagnostic!:string;
    public status!:string;
    public procedures!:string;
    public totalPrice:number=0;
    public procedureList:Procedure[]=[];
}
