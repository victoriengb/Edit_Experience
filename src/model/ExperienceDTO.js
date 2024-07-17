import Experience from "./Experience";

class ExperienceDTO extends Experience{
    
    constructor(experience){
        super()
        this.debut = experience.debut
        this.fin = experience.fin
        this.statusCandidate = experience.statusCandidate
        this.contrat = experience.contrat
        this.nom = experience.nom
        this.type = experience.type
        this.codePostal = experience.codePostal
        this.ville = experience.ville
        this.adresse = experience.adresse
        this.couverts = experience.couverts
        this.nomContact = experience.nomContact
        this.numeroContact = experience.numeroContact
        this.posteContact = experience.posteContact
        this.emailContact = experience.emailContact
        this.note = experience.note
        this.commentaire = experience.commentaire
        this.commentaireInterne = experience.commentaireInterne
        this.annee_job = experience.annee_job
        this.en_cours = experience.en_cours
        this.extra_frequence = experience.extra_frequence
        this.commentaire_extra = experience.commentaire_extra
        this.autorisation_verif = experience.autorisation_verif

        this.qualification.id = experience.qualification.id
        //this.categorie.id = experience.categorie.id

        this.idEtablissement = experience.idEtablissement
        //console.log('Experience DTO - qualification : ', experience.qualification)
        //this.qualification = experience.qualification
    }
    
    getFormatedExperience(){
        return {
            "debut" : this.debut,
            "fin" : this.fin,
            "status" : this.statusCandidate,
            "contrat" : this.contrat,
            "nom" : this.nom,
            "type" : this.type,
            "codePostal" : this.codePostal,
            "ville" : this.ville,
            "adresse" : this.adresse,
            "couverts" : this.couverts,
            "nomContact" : this.nomContact,
            "numeroContact" : this.numeroContact,
            "posteContact" : this.posteContact,
            "emailContact" : this.emailContact,
            "note" : this.note,
            "extra" : {"id": 3670882},
            "commentaire" : this.commentaire,
            "commentaireInterne" : this.commentaireInterne,
            "annee_job" : this.annee_job,
            "en_cours" : this.en_cours,
            "extra_frequence" : this.extra_frequence,
            "commentaire_extra" : this.commentaire_extra,
            "autorisation_verif" : this.autorisation_verif,
            "qualification" : {"id": this.qualification.id},
            "categorie" : this.categorie.id,
            "idEtablissement" : "8527695"
        }
    }
}

export default ExperienceDTO