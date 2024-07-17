import ExperienceDTO from "@/model/ExperienceDTO";

import getExperiences from "./get-candidates-experiences"

export async function setExperience(experience){
    
    const NEW_EXPERIENCE = `https://api-simon-dev.extracadabra.com/api/expextrabizdev/actions/experience/${experience.id}`

    let experienceDTO = new ExperienceDTO(experience)

    const experienceToSend = {
        method : 'POST',
        headers : {
        "Content-type": "application/json;charset=UTF-8",
        "X-AUTH-TOKEN": "TEST_TECH_AUTH_KEY_07a2a940",
        "X-CHANNEL-EXTRACADABRA": "bo"
        },
        body : JSON.stringify(experienceDTO.getFormatedExperience())
    }
    
    fetch(NEW_EXPERIENCE, experienceToSend)
    .then(response => response.json())
    .then((json) => console.log(json));
}

export default async function updateExperience(experience){
    const NEW_EXPERIENCE = `https://api-simon-dev.extracadabra.com/api/expextrabizdev/actions/experience/{experience.id}`
    
    const experienceDTO = new ExperienceDTO(experience)

    console.log('experienceDTO', experienceDTO.getFormatedExperience())
    const experienceToPut = {
        method : 'POST',
        headers : {
        "Content-type": "application/json;charset=UTF-8",
        "X-AUTH-TOKEN": "TEST_TECH_AUTH_KEY_07a2a940",
        "X-CHANNEL-EXTRACADABRA": "bo"
        },
        body : JSON.stringify(experienceDTO.getFormatedExperience())
    }
    
    console.log('Experience formated : ', experience.getFormatedExperience())
    fetch(NEW_EXPERIENCE, experienceToPut)
    .then(response => response.json())
    .then((json) => console.log(json));

    await getExperiences()
    console.log('BlaBla ' + 'getExperiences()', getExperiences())
}

/*
export default{
    setExperience,
    updateExperience
}
*/