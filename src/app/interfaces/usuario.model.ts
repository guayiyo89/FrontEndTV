export class Usuario{
    constructor(
        public username: string,
        public password: string,
        public email: string,
        public userrole: string,
        public _id?: string
    ) {}
}