import { API } from './API'
import { init_api } from './API'

function checkTutorial() {
    const fetchSurveyQuestions = async () => {
        init_api();
        try {
            const promise = API.get(`/api/User/`);
            promise.then((response) => {
                const res = response.data;
                console.log(res)
                
            });
            
        } catch (error) {
            console.error(error);
        }
    };
    
    
    
    fetchSurveyQuestions();
    
    
   
}
   
export default checkTutorial;
   
   
   
   
   
   
   
  