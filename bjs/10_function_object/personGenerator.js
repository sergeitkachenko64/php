const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ольга",
            "id_2": "Галина",
            "id_3": "Татьяна",
            "id_4": "Валентина",
            "id_5": "Лариса",
            "id_6": "Светлана",
            "id_7": "Марина",
            "id_8": "Наталья",
            "id_9": "Любовь",
            "id_10": "Надежда"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) =>
        Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        if (this.randomIntNumber() === 0) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },

    randomBirthYear: function () {
        if (this.randomIntNumber() === 0) {
            return '2000 г.р.';
        } else {
            return '1999 г.р.';
        }
    },

    randomFirstName: function () {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson)
        } else {
            return this.randomValue(this.firstNameFemaleJson)
        };
    },

    randomSurname: function () {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.surnameJson)
        } else {
            return this.randomValue(this.surnameJson) + "а"
        };

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    },
};
