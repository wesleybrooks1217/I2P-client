
import React from "react";
import { School } from "tabler-icons-react";
import Footer from "../Landing/Footer";
import TopNav from "../Nav/components/TopNav";
import "./SchoolSystems.css"
/*

      <Container className="products-text"> 
      <Title mt={70} className={classes.title}> Accessible information on every student's unique academic path  </Title>
      <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students with our counselor tools.  
        </Text>
  </Container>


  <Container className="products-text"> 
      <Title mt={70} className={classes.title}> Complement the counseling process with smart technology   </Title>
      <Text className="products-tag2">  Our tool allow counselors to filter, compare, and inspect student profiles with full customization control. Send academic resources, recommended colleges or career paths, or request students to schedule a meeting with you all fast through our platform. 
        </Text>
  </Container>
 <Container className="products-text">
      <Title mt={70} className={classes.title}> Next level tools for students and counselors  </Title>
      <Text className="products-tag2">Counselors can use the MyStudents tool to filter, compare, and inspect student profiles with full customization controls. Send academic resources, recommended colleges or career paths, or request the student to schedule a meeting with you. </Text>
  </Container>
 <UsersTable data={userTable} />



  

 <Container className="products-text">
      <Title mt={70} className={classes.title}> Enhance student collaboration through our community </Title>
      <Text className="products-tag2"> Collaborate with other individuals using our platform through MyNext4's discord server. 
      Discuss classwork, ideas, and find likeminded individuals with similar desires.  </Text>
  </Container>

  <Container mb={70}className="products-text">
      <Title  mt={70} className={classes.title}> Help revolutionize the college counseling process  </Title>
      <Text className="products-tag2"> Support MyNext4's mission by complementing your work with everything our platform has to offer. 
      Use our tools to access, track, and augment student information like never before.  </Text>
  </Container>

*/

function SchoolSystems() {
    return (
        <div>
           
            <section className='schools-s1'>
            <div style={{position: 'absolute', width: '100%'}}>
                <TopNav />
               
            </div>
                <div id='schools-info-icon'>
                  <School size={48} />
                </div>
                <p id='schools-nametag'>School Systems</p> 
                <h2 id='schools-title'> Have a helping hand to finish things faster. </h2>
                <p id='schools-desc'> Elevate efficiency with our game-changing tools made to enhance counselor convenience.</p>
       
            </section>
            <section className='schools-s2'>
                <h2 id='schools-s2-header'> Setting students up for success. </h2>
                <p id='schools-s2-desc'> We'll provide students the resources the require to grow, and send counselors the student specifics. </p>    
            </section>
            <section className='schools-s3'>
                <h2 id='schools-s3-header'> Tools to complement college counselors. </h2>
                <p id='schools-s3-desc'> We'll provide plenty of pre-created counselor tools ready for use upon a school's registration. </p>    
            </section>
            <section className='schools-s4'>
                <h2 id='schools-s4-header'> Boosting overall oppourtunity for students. </h2>
                <p id='schools-s4-desc'> We ensure that every student is connected to the courses, colleges, and careers that fit for them. </p>    
            </section>
            <Footer />
            
        </div>
    )
}

export default SchoolSystems;