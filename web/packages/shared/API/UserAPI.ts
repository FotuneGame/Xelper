import axios from "axios";

const URL = "http://localhost:5001"

const userAPI = {
    registration: async (_password: string, _email: string, phone: string, _surname: string,place:string) => {
        return await axios.post(URL + "/Home/Register", {
            _id: "dsad",
            UserID: "dsa",
            Surname: _surname,
            Email: _email,
            Password: _password,
            BirthDate: new Date(),
            PlaceOfLiving: place ?? "test",
            PhoneNumber: phone ?? ")dsa"
        }).then(res => {
            console.log(res);
            return res.json();
        }).catch(e =>{
            console.log(e.name + ") Запрос на регистрацию пользователя: " + e.message);
            return null;
        });
    },

    login: async (_email: string, _password: string) => {
        return await axios.post(URL + "/Home/Login", {
            _id: "dsad",
            UserID: "dsa",
            Surname: "NAsdm",
            Email: _email,
            Password: _password,
            BirthDate: new Date(),
            PlaceOfLiving: "dsadsa",
            PhoneNumber: ")dsa"
        }).then(res => {
            console.log(res);
            return res.json();
        }).catch(e =>{
            console.log(e.name + ") Запрос на авторизацию пользователя: " + e.message)
            return null;
        });
    },

    data: async (_token: string) => {
        return await axios.get(URL + "/Home/Data" , {
            headers: {
                Authorization: "Bearer " + _token,
            }
        }).then(res => {
            console.log(res);
            return res.json();
        }).catch(e =>{
            console.log(e.name + ") Запрос на получение инфы по токену пользователя: " + e.message)
            return null;
        });
    },
}

export default userAPI;