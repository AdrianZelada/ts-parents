import * as fs from 'fs';
interface IUserFile{
    name: string;
    file_name: string;
    file: string[];
    getText(): string;
}

class UserFile implements IUserFile{
    name: string;
    file_name: string;
    file: string[];
    constructor(name: string, f_name: string, f: string[]) {
        this.name = name;
        this.file_name = f_name;
        this.file = f;
    }
    getText(): string {
        return this.file.join(" ");
    }
    
}

class UserFileFactory {
    static files: {[key: string] : string[]};
    static getUserFile(name: string, file_name: string): IUserFile{
        if(UserFileFactory.files[file_name]==null) {
            UserFileFactory.files[file_name] = fs.readdirSync(file_name);
        }
        return new UserFile(name, file_name, UserFileFactory.files[file_name]);
    }
}


let usersFile: Array<IUserFile> = []
const users: Array<any> = [
    { name: 'Adrian', file_name: 'output-28-04-2022.xls'},
    { name: 'Walter', file_name: 'output-28-04-2022.xls'},
    { name: 'Adrian', file_name: 'output-29-04-2022.xls'},
    { name: 'Walter', file_name: 'output-29-04-2022.xls'}
]

usersFile = users.map((user: any) =>{
    return UserFileFactory.getUserFile(user.name, user.file_name);
});

usersFile.forEach((user: IUserFile) => {
    user.getText();
})