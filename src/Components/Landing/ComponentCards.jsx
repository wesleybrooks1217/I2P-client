import React from 'react';
import styleSheet from "../StyleSheet";
import BadgeCard from "../ComponentCardTemplate"
import {
    Container,
  } from '@mantine/core';

function ComponentCards() {
    const { classes } = styleSheet();
    const courseBadges = [
        { "emoji": "🪪", "label": "MySchedule" },
        { "emoji": "📒", "label": "MyNotes" },
        { "emoji": "🎒", "label": "MyBackpack" }, 
      ]
      
      const collegeBadges = [
        { "emoji": "🏫", "label": "MyNextEducation" },
        {"emoji": "📍", "label": "MyPins" },
        { "emoji": "🎓", "label": "MyCredits" },
        { "emoji": "🔮", "label": "MyAdmissions" },
      ]
    
      const careerBadges = [
        { "emoji": "📆 ", "label": "MyCareers" },
        { "emoji": "🍎", "label": "MyPath" },
        { "emoji": "👔", "label": "MyCommunity" },
      ]
    
    return (
        <Container  className={classes.cards}>
        <BadgeCard
    
            badges = { courseBadges
            }
            image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="MyCourses"
            country="MNF U Component " 
            description="Prepare students effectivley with a personalized class scheduler, class base-resource compiler, and progress based achievment marks to gamify the process along the way."/>
            
        <BadgeCard 
                
            badges = { collegeBadges
            }
            image="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            title="MyColleges"
            country="MNF U Component" 
            description="Make it easy for student's to find their Next4 with our personalized college tools. Student's can receieve recommended colleges from both MyNext4 and the school counselor.
        "/>
        <BadgeCard 
            
            badges = { careerBadges
            }
            image="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            title="MyCareers"
            country="MNF U Component" 
            description="Accessing student information taken to new levels of convenience. Organize, filter, and customize the counselor dashboard to find desired information in seconds.
            " />
     </Container>
    )
}

export default ComponentCards;