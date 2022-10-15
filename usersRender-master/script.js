// const gradation = {
//     20: "satisfactory",
//     55: "good",
//     85: "very-good",
//     100: "excellent"
// };

const users = [
    {
        name: "Jack Smith",
        age: 23,
        img: "JackSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 20
            },
            {
                "title": "Java Enterprise",
                "mark": 100
            }
        ]
    },
    {
        name: "Amal Smith",
        age: 20,
        img: "AmalSmith",
        role: "student"
    },
    {
        name: "Noah Smith",
        age: 43,
        img: "NoahSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 50
            }
        ]
    },
    {
        name: "Charlie Smith",
        age: 18,
        img: "CharlieSmith",
        role: "student",
        courses: [
            {
                "title": "Front-end Pro",
                "mark": 75
            },
            {
                "title": "Java Enterprise",
                "mark": 23
            }]
    },
    {
        name: "Emily Smith",
        age: 30,
        img: "EmilySmith",
        role: "admin",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 10,
                "lector": "Leo Smith"
            },
            {
                "title": "Java Enterprise",
                "score": 50,
                "lector": "David Smith"
            },
            {
                "title": "QA",
                "score": 75,
                "lector": "Emilie Smith"
            }]
    },
    {
        name: "Leo Smith",
        age: 253,
        img: "LeoSmith",
        role: "lector",
        courses: [
            {
                "title": "Front-end Pro",
                "score": 78,
                "studentsScore": 79
            },
            {
                "title": "Java Enterprise",
                "score": 85,
                "studentsScore": 85
            }
        ]
    }
];

class UserClass {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.img = obj.img
        this.role = obj.role;
        this.courses = obj.courses;
    }

    grade(mark) {
        switch (true) {
            case (mark <= 20):
                return `satisfactory`;
            case (mark <= 55):
                return `good`;
            case (mark <= 85):
                return `very-good`;
            case (mark === 100):
                return `excellent`
            default:
                return `No grade`
        }
    }

    render() {
        return `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this.img}.png" alt="${this.name}" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role ${this.role}">
                    <img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
                    <p>${this.role}</p>
                </div>
            </div>
            ${this.renderCourses()}
        </div>`
    }

    renderCourses() {
    }
}


class Student extends UserClass {
    constructor(obj) {
        super(obj);
    }

    renderCourses() {
        if (this.courses !== undefined) {
            return `<div class="user__courses">
                    ${this.courses.map(item => `<p class="user__courses--course ${this.role}">${item.title}<span class="${this.grade(item.mark)}">${this.grade(item.mark)}</span></p>`).join('')}
                    </div>`;
        } else {
            return '';
        }
    }

}

class Lector extends UserClass {
    constructor(obj) {
        super(obj);
    }

    renderCourses() {
        return `<div class="user__courses admin--info">
                ${this.courses.map(item => `<div class="user__courses--course ${this.role}">
				<p>Title: <b>${item.title}</b></p>
				<p>Lector's score: <span class="${this.grade(item.score)}">${this.grade(item.score)}</span></p>
				<p>Average student's score: <span class="${this.grade(item.studentsScore)}">${this.grade(item.studentsScore)}</span></p>
				</div>`).join('')}
            </div>`
    }
}

class Admin extends UserClass {
    constructor(obj) {
        super(obj);
    }

    renderCourses() {
        return `<div class="user__courses admin--info">
					${this.courses.map(item => `<div class="user__courses--course ${this.role}">
					<p>Title: <b>${item.title}</b></p>
					<p>Admin's score: <span class="${this.grade(item.score)}">${this.grade(item.score)}</span></p>
					<p>Lector: <b>${item.lector}</b></p>
					</div>`).join('')}
            	</div>`;
    }
}

const cards = [];
for (let key in users) {
    switch (users[key].role) {
        case 'student' :
            cards.push(new Student(users[key]));
            break;
        case 'lector' :
            cards.push(new Lector(users[key]));
            break;
        case 'admin' :
            cards.push(new Admin(users[key]));
            break;
    }
}

document.write(`<div class="users"> ${cards.map(item => item.render()).join('')} </div>`)