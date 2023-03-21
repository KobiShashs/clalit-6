export interface RootObject {
    results: ResultModel[];
    info:    InfoModel;
}

export interface InfoModel {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export interface ResultModel {
    gender:     GenderModel;
    name:       NameModel;
    location:   LocationModel;
    email:      string;
    login:      LoginModel;
    dob:        DobModel;
    registered: DobModel;
    phone:      string;
    cell:       string;
    id:         IDModel;
    picture:    PictureModel;
    nat:        string;
}

export interface DobModel {
    date: Date;
    age:  number;
}

export enum GenderModel {
    Female = "female",
    Male = "male",
}

export interface IDModel {
    name:  string;
    value: null | string;
}

export interface LocationModel {
    street:      StreetModel;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number | string;
    coordinates: CoordinatesModel;
    timezone:    TimezoneModel;
}

export interface CoordinatesModel {
    latitude:  string;
    longitude: string;
}

export interface StreetModel {
    number: number;
    name:   string;
}

export interface TimezoneModel {
    offset:      string;
    description: string;
}

export interface LoginModel {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
}

export interface NameModel {
    title: string;
    first: string;
    last:  string;
}

export interface PictureModel {
    large:     string;
    medium:    string;
    thumbnail: string;
}
