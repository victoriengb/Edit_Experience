import dayjs from "dayjs";
class Experience{
    debut = new Date()
    fin = new Date()
    statusCandidate = ""
    contrat = ""
    nom = ""
    type = ""
    codePostal = ""
    ville = ""
    adresse = ""
    couverts = ""
    nomContact = ""
    numeroContact = ""
    posteContact = ""
    emailContact = ""
    note = ""
    extra = {"id" : 2}
    commentaire = ""
    commentaireInterne = ""
    annee_job = ""
    en_cours = ""
    extra_frequence = ""
    commentaire_extra = ""
    autorisation_verif = ""
    qualification = {"id" : 3}
    categorie = {"id" : 3}
    idEtablissement = ""
    id = 3670882
    //idEtablissement - qualification - catégorie

    isEndingDateValid(){
        let startingDate = dayjs(this.debut)
        let endingDate = dayjs(this.fin)
        return endingDate.isAfter(startingDate)
    }

    isCodePostalValid(){
        return this.codePostal.length == 5 && /^[0-9]+$/.test(this.codePostal)
    }

    isMobileNumerValid(){
        return this.numeroContact.length == 10 && /^[0-9]+$/.test(this.numeroContact)
    }

    isNombreCouvertsValid(){
        return /^[0-9]+$/.test(this.couverts)
    }

    isNoteValid(){
        return /^[0-9]+$/.test(this.note) && this.note <= 5 && this.note >= 1
    }

    getFormatedExperience(){}
}

export default Experience