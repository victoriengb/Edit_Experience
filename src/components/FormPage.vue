<template>
  <div>
    <h1>
      <RouterLink to="/" style="color: white;">Accueil</RouterLink>
    </h1>

    <form action="" class="form">
    <div class="form-row">
      <div class="input-field">
        <label for="dateDebut">Date de début</label>
        <input type="date" name="dateDebut" v-model="experience.debut" class="input">
      </div>

      <div class="input-field">
        <label for="dateFin">Date de fin</label>
        <input type="date" name="dateFin" v-model="experience.fin" class="input">
        <!--
          <p v-if="!experience.isEndingDateValid()" style="color: red;">Date de fin antérieure à la date de début</p>
        -->
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="statut">Statut</label>
        <select name="statut" id="" v-model="experience.statusCandidate" required class="input">
          <option value="En_cours">En cours</option>
          <option value="Fini">Fini</option>
        </select>
      </div>

      <div class="input-field">
        <label for="statut">Contrat</label>
        <select name="contrat" id="" v-model="experience.contrat" required class="input">
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="nomCandidat">Nom</label>
        <input type="text" name="nomCandidat" v-model="experience.nom" required class="input">
      </div>

      <div class="input-field">
        <label for="type">Type</label>
        <select name="type" id="" v-model="experience.type" required class="input">
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="codePostal">Code Postal</label>
        <!--
          <input type="text" name="codePostal" v-model.trim="experience.codePostal">
        -->
        <input type="text" name="codePostal" v-model="experience.codePostal" class="input">
        <!--²
        <p v-if="!experience.isCodePostalValid()" style="color: red;">Code Postal invalide</p>
        -->
      </div>

      <div class="input-field">
        <label for="ville">Ville</label>
        <input type="text" name="ville" v-model="experience.ville" required class="input">
      </div>
    </div>

    <div class="form-row">
        <div class="input-field">
          <label for="adresse">Adresse</label>
          <input type="text" name="adresse" v-model="experience.adresse" required class="input">
        </div>
  
        <div class="input-field">
          <label for="couverts">Couverts</label>
          <!--
            <input type="text" name="couverts" v-model.number="experience.couverts" required>
          -->
          <input type="text" name="couverts" v-model="experience.couverts" required class="input">
          <!--
            <p v-if="!experience.isNombreCouvertsValid()" style="color: red;">NaN error</p>
          -->
        </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="nomContact">Nom Contact</label>
        <input type="text" name="nomContact" v-model="experience.nomContact" required class="input">
      </div>

      <div class="input-field">
        <label for="numeroContact">Numéro Contact</label>
        <!--
          <input type="tel" name="numeroContact" v-model.trim="experience.numeroContact">
        -->
        <input type="tel" name="numeroContact" v-model="experience.numeroContact" class="input">
        <!--
          <p v-if="!experience.isMobileNumerValid()" style="color: red;">Invalid Mobile Number</p>
        -->
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="posteContact">Poste Contact</label>
        <input type="text" name="posteContact" v-model="experience.posteContact" required class="input">
      </div>

      <div class="input-field">
        <label for="emailContact">Mail Contact</label>
        <input type="email" name="emailContact" v-model="experience.emailContact" required class="input">
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="noteCandidat">Note</label>
        <!--
          <input type="text" name="noteCandidat" v-model.number="experience.note">
        -->
        <input type="text" name="noteCandidat" v-model="experience.note" class="input">
        <!--
          <p v-if="!experience.isNoteValid()" style="color: red;">NaN or number not between 1 and 5</p>
        -->
      </div>

      <div class="input-field">
        <label for="extra">Extra</label>
        <!--
          <input type="number" name="extra" v-model.number="experience.extra.id">
        -->
        <input type="number" name="extra" v-model="experience.extra.id" class="input">
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="commentaire">Commentaire</label>
        <textarea name="commentaire" v-model="experience.commentaire" class="input"></textarea>
      </div>

      <div class="input-field">
        <label for="commentaire">Commentaire Interne</label>
        <textarea name="commentaire" v-model="experience.commentaireInterne" class="input"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="anneeJob">Année Contrat</label>
        <input type="date" v-model="experience.annee_job" class="input">
      </div>

      <div class="input-field">
        <label for="en_cours">En cours</label>
        <select name="en_cours" id="" v-model="experience.en_cours" class="input">
          <option value="1">1</option>
          <option value="0">0</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="extraFrequence">Extra Fréquence</label>
        <input type="text" v-model="experience.extra_frequence" class="input">
      </div>

      <div class="input-field">
        <label for="commentaireExtra">Commentaire extra</label>
        <textarea name="commentaireExtra" id="" v-model="experience.commentaire_extra" class="input"></textarea>
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="autorisationVerif">Autorisation Vérification</label>
        <select name="autorisationVerif" id="" v-model="experience.autorisation_verif" class="input">
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </div>

      <div class="input-field">
        <label for="qualification">Qualification</label>
        <input type="number" min="1" max="95" v-model="experience.qualification.id" class="input">
      </div>
    </div>

    <div class="form-row">
      <div class="input-field">
        <label for="categorie">Catégorie</label>
        <input type="number" min="1" max="62" v-model="experience.categorie.id" class="input">
      </div>

      <div class="input-field">
        <label for="idEtablissement">Id Établissement</label>
        <input type="text" v-model="experience.idEtablissement" class="input">
      </div>
    </div>

      <div>
        <RouterLink to="/"><button type="button" @click="submit" class="input" style="background-color: #da2b2b; width: 150px;">Submit</button></RouterLink>
      </div>
    </form>
  </div>
</template>

<script>
  //import dayjs from "dayjs";
  import updateExperience from '../services/post-candidate-experience'
  //import setExperience from '../services/post-candidate-experience'

  import getExperiences from "../services/get-candidates-experiences"

    export default{
      
      computed : {
          experience(){
              //console.log('this.$store.getters.getExperience', this.$store.getters.getExperience)
              return this.$store.getters.getExperience
          }
      },
      methods: {
        async submit(){
          //setExperience(this.experience)

          console.log('this.experience', this.experience)
          
          //console.log('updateExperience', updateExperience.updateExperience)
          
          //updateExperience.updateExperience(this.experience)
          await updateExperience(this.experience)
          console.log('Experience Qualification Id : ', this.experience.qualification.id)
          await getExperiences()
          //await setExperience(this.experience)
          //updateExperience(this.$store.getters.getExperience)
          console.log('this.$store.getters.getExperiences', this.$store.getters.getExperiences)

        }
  }
      /*,
      methods : {
            formatDate(date){
                return dayjs(date).format('DD/MM/YYYY')
            }
        }*/
    }
</script>

<style>

  body{
    background-color: #111111;
    color: white;
  }

  .form-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  label{
    font-weight: bold;
    color: white;
  }
  .input{
    background-color: #1c1c1c;
    color: white;
    height: 60px;

    border: none;
  }
  .input-field{
    width: 40%;
    display: inline;
    margin-bottom: 5%;
  }

  .input-field label{
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  }

  input[type=text], input[type=textarea], select, textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  }

  .input-field input{
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  width: 100%;
  }
  /*
  input[type=button], input[type=submit], input[type=reset] {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  }
  */
</style>
