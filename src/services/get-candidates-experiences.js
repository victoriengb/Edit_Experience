export default async function getExperiences(){
    const EXPERIENCES_USERS = 'https://api-simon-dev.extracadabra.com/api/extrabizdev/extra/3670882/experiences';

    return fetch(EXPERIENCES_USERS, {
        method : 'GET',
        headers : {
            "Content-type": "application/json;charset=UTF-8",
            "X-AUTH-TOKEN": "TEST_TECH_AUTH_KEY_07a2a940",
            "X-CHANNEL-EXTRACADABRA": "bo"
        }
    })
    .then(response => response.json())
}