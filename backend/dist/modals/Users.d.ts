export interface IUser {
    email: string;
    name: string;
    password: string;
}
export declare const UserModal: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
//# sourceMappingURL=Users.d.ts.map