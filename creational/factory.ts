enum typeAuthentication {
    google,
    facebook,
    github
}

interface IAuthentication{
    key: string;
    login(): Promise<any>;
    logout(): Promise<any>;
    validateToken(): Promise<any>;
}

class Authentication implements IAuthentication{
    key: string;
    login(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    logout(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    validateToken(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}

class AuthenticationGoogle extends Authentication {
    constructor() {
        super();
    }
}

class AuthenticationFacebook extends Authentication {
    constructor() {
        super();
    }
}

class AuthenticationGithub extends Authentication {
    constructor() {
        super();
    }
}


class AuthenticationFactory{
    static getAuthentication(type: typeAuthentication): IAuthentication {
        if(type == typeAuthentication.google) {
            return new AuthenticationGoogle();
        }
        if(type == typeAuthentication.facebook) {
            return new AuthenticationFacebook();
        }
        if(type == typeAuthentication.github) {
            return new AuthenticationGithub();
        }
    }
}


let auth = AuthenticationFactory.getAuthentication(typeAuthentication.google);

console.log(auth);