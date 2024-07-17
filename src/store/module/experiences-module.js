import getExperiences from "@/services/get-candidates-experiences.js"
import ExperienceDTO from "@/model/ExperienceDTO"

const state = {
    experiences : [],
    experience : {}
}

const mutations = {
    setExperiences(state, experiences){
        state.experiences = experiences
    },
    setExperience(state, experience){
        //state.experience = experience
        console.log('BlaBlaBla ' + 'experience', experience)
        state.experience = new ExperienceDTO(experience)
    }
}

const actions = {
    async collectExperieneces({commit}){
        let experiences = await getExperiences();
        console.log('Action : ' + 'experiences', experiences)
        commit('setExperiences', experiences)
    },
    collectExperienceById({commit}, id){
        commit('setExperience', state.experiences.find((element) => element.id == id))
    }
}

const getters = {
    getExperiences(){
        return state.experiences
    },
    getExperience(){
        return state.experience
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}