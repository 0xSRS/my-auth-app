import {Schema, model} from 'mongoose';

export interface IUser{
    email:string,
    name:string,
    password:string
}

const UserSchema = new Schema<IUser>({
    email:{type:String , unique:true , required:true},
    name:{type:String ,required:true},
    password:{type:String, required:true}
})

export const UserModal = model<IUser>("users" , UserSchema)