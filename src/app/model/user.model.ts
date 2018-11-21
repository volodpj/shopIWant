export class User{
    firstName: string;
    lastName: string;
    login: string;
    email: string;
    password: string;
    dateBirth: string;
    sex: string;
    constructor(firstName, lastName, login, email, password, dataBirth, sex){
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.email = email;
        this.password = password;
        this.dateBirth = dataBirth;
        this.sex = sex;
    }
}