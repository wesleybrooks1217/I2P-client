const mock = true;

const scheduleData = [
    {
      id: "1",
      course: "Health 2",
      classPeriod: "First: 9:05-10:20",
      teacher: "Rob Wolf",
    },
    {
      id: "2",
      course: "AP Chemistry",
      classPeriod: "Second: 10:30-11:45",
      teacher: "Jerry Walters",
    },
    {
      id: "3",
      course: "Algebra 1",
      classPeriod: "Third: 12:00-1:15",
      teacher: "Henry Smith",
    },
    {
      id: "4",
      course: "Geometry",
      classPeriod: "Fourth: 1:30-2:45",
      teacher: "Susan Jones",
    },
    {
      id: "5",
      course: "Physical Education",
      classPeriod: "Fifth: 3:00-4:15",
      teacher: "Drake Griffith",
    },
  ];

async function fakeFetch(data) {
    const fakeLengthMs = 1000;
    await new Promise(resolve => setTimeout(resolve, fakeLengthMs));
    return data;
}

async function realFetch(url) {
    const resRaw = await fetch(url);
    const res = await resRaw.json();
    return res;
}

export async function getCourses() {
 if (mock) {
     return fakeFetch(scheduleData);
 } else {
    return realFetch("http://127.0.0.1:8000/api");
 }
}

export async function getGrades() {

}

export async function getSeths() {

}


