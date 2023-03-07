const dummyMissions = [
   
   
    {
      id: 4,
      title: "Simple starts.",
      description: "Find one college you feel connected to.",
      icon: "utensils",
      count: 8,
      progress: 6,
    },
 
 
 
    
  ];

  export default dummyMissions;

  export const courses = [
    {id: 1, name: "Intro to Computer Science", instructor: "John Doe", progress: 60},
    {id: 2, name: "Calculus 1", instructor: "Jane Smith", progress: 80},
    {id: 3, name: "Introduction to Statistics", instructor: "Bob Johnson", progress: 25},
    {id: 4, name: "English Composition", instructor: "Mary Wilson", progress: 100},
    {id: 5, name: "Introduction to Psychology", instructor: "David Lee", progress: 40},
    {id: 6, name: "Spanish 101", instructor: "Maria Hernandez", progress: 10},
    {id: 7, name: "Organic Chemistry", instructor: "Samantha Lee", progress: 50},
    {id: 8, name: "Introduction to Philosophy", instructor: "Chris Johnson", progress: 75},
    {id: 9, name: "Art History", instructor: "Jennifer Davis", progress: 90},
    {id: 10, name: "Introduction to Sociology", instructor: "Mike Smith", progress: 30},
  ];
  
  export const Courses = ({course}) => {
    return (
      <div className="course">
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Progress: {course.progress}%</p>
      </div>
    );
  };
  
  export const colleges = [
    {id: 1, name: "Harvard University", location: "Cambridge, MA", ranking: 1},
    {id: 2, name: "Stanford University", location: "Stanford, CA", ranking: 2},
    {id: 3, name: "Massachusetts Institute of Technology", location: "Cambridge, MA", ranking: 3},
    {id: 4, name: "California Institute of Technology", location: "Pasadena, CA", ranking: 4},
    {id: 5, name: "University of Chicago", location: "Chicago, IL", ranking: 6},
    {id: 6, name: "Princeton University", location: "Princeton, NJ", ranking: 7},
    {id: 7, name: "Yale University", location: "New Haven, CT", ranking: 8},
    {id: 8, name: "Columbia University", location: "New York, NY", ranking: 9},
    {id: 9, name: "Duke University", location: "Durham, NC", ranking: 12},
    {id: 10, name: "Johns Hopkins University", location: "Baltimore, MD", ranking: 10},
  ];
  
  export const Colleges = ({college}) => {
    return (
      <div className="college">
        <h3>{college.name}</h3>
        <p>Location: {college.location}</p>
        <p>Ranking: {college.ranking}</p>
      </div>
    );
  };
  

  export const careers = [
    { id: 1, name: "Career 1" },
    { id: 2, name: "Career 2" },
    { id: 3, name: "Career 3" },
    { id: 4, name: "Career 4" },
    { id: 5, name: "Career 5" },
    { id: 6, name: "Career 6" },
    { id: 7, name: "Career 7" },
    { id: 8, name: "Career 8" },
    { id: 9, name: "Career 9" },
    { id: 10, name: "Career 10" },
  ];
  
  
  export const Careers = ({career}) => {
    return (
      <div className="career">
        <h3>{career.name}</h3>
        <p>College</p>
        <p>Num: {career.id}</p>
      </div>
    );
  };