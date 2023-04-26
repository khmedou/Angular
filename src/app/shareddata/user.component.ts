export class User{
    private username :string;
	private nom :string;
	private prenom:string;
	private email :string;
    private tel :string;
    private password :string;
    private role :string;
    

    constructor(username ?:any,nom ?:any, tel ?:any, email ?:any ,password?:any,role ?:any, prenom ?:any,type?:any){
        this.username = username;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.tel = tel
        this.role=role
        this.nom=nom

    }


}

