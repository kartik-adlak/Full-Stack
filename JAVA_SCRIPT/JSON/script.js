
const studentsData = {
    students: [
        {
            id: 1,
            name: "Kartik",
            age: 22,
            gender: "Male",
            email: "kartik@gmail.com",
            city: "Bhopal",
            course: "B.Tech",
            branch: "Computer Science",
            semester: 8,
            cgpa: 7.5, 
            skills: ["Java", "JavaScript", "React", "HTML", "CSS"],
            isActive: true
        },

        {
            id: 2,
            name: "Nikhil",
            age: 22,
            gender: "Male",
            email: "nikhil@gmail.com",
            city: "Indore",
            course: "B.Tech",
            branch: "Computer Science",
            semester: 8,
            cgpa: 8.2,
            skills: ["Java", "SQL", "JavaScript"],
            isActive: true
        },

        {
            id: 3,
            name: "Lucky",
            age: 21,
            gender: "Male",
            email: "lucky@gmail.com",
            city: "Betul",
            course: "B.Tech",
            branch: "Information Technology",
            semester: 7,
            cgpa: 7.8,
            skills: ["HTML", "CSS", "JavaScript"],
            isActive: true
        },

        {
            id: 4,
            name: "Harshika",
            age: 21,
            gender: "Female",
            email: "harshika@gmail.com",
            city: "Bhopal",
            course: "B.Tech",
            branch: "Computer Science",
            semester: 8,
            cgpa: 8.5,
            skills: ["React", "JavaScript", "CSS"],
            isActive: true
        }
    ]
};




console.log(studentsData);



studentsData.students[1].name = "helllo";

delete studentsData.students[1].age;

