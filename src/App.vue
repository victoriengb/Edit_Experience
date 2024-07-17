<template>
  <!--
    <form action="">
      <div class="form-row">
        <div class="input-field">
          <label for="dateDebut">Date de début</label>
          <input type="date" name="dateDebut" v-model="experience.debut">
        </div>
  
        <div class="input-field">
          <label for="dateFin">Date de fin</label>
          <input type="date" name="dateFin" v-model="experience.fin">
          <p v-if="!experience.isEndingDateValid()" style="color: red;">Date de fin antérieure à la date de début</p>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="statut">Statut</label>
          <select name="statut" id="" v-model="experience.statusCandidate" required>
            <option value="En_cours">En cours</option>
            <option value="Fini">Fini</option>
          </select>
        </div>
  
        <div class="input-field">
          <label for="statut">Contrat</label>
          <select name="contrat" id="" v-model="experience.contrat" required>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
          </select>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="nomCandidat">Nom</label>
          <input type="text" name="nomCandidat" v-model="experience.nom" required>
        </div>
  
        <div class="input-field">
          <label for="type">Type</label>
          <select name="type" id="" v-model="experience.type" required>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="codePostal">Code Postal</label>
          <input type="text" name="codePostal" v-model.trim="experience.codePostal">
          <p v-if="!experience.isCodePostalValid()" style="color: red;">Code Postal invalide</p>
        </div>
  
        <div class="input-field">
          <label for="ville">Ville</label>
          <input type="text" name="ville" v-model="experience.ville" required>
        </div>
      </div>
  
      <div class="form-row">
          <div class="input-field">
            <label for="adresse">Adresse</label>
            <input type="text" name="adresse" v-model="experience.adresse" required>
          </div>
    
          <div class="input-field">
            <label for="couverts">Couverts</label>
            <input type="text" name="couverts" v-model.number="experience.couverts" required>
            <p v-if="!experience.isNombreCouvertsValid()" style="color: red;">NaN error</p>
          </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="nomContact">Nom Contact</label>
          <input type="text" name="nomContact" v-model="experience.nomContact" required>
        </div>
  
        <div class="input-field">
          <label for="numeroContact">Numéro Contact</label>
          <input type="tel" name="numeroContact" v-model.trim="experience.numeroContact">
          <p v-if="!experience.isMobileNumerValid()" style="color: red;">Invalid Mobile Number</p>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="posteContact">Poste Contact</label>
          <input type="text" name="posteContact" v-model="experience.posteContact" required>
        </div>
  
        <div class="input-field">
          <label for="emailContact">Mail Contact</label>
          <input type="email" name="emailContact" v-model="experience.emailContact" required>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="noteCandidat">Note</label>
          <input type="text" name="noteCandidat" v-model.number="experience.note">
          <p v-if="!experience.isNoteValid()" style="color: red;">NaN or number not between 1 and 5</p>
        </div>
  
        <div class="input-field">
          <label for="extra">Extra</label>
          <input type="number" name="extra" v-model.number="experience.extra.id">
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="commentaire">Commentaire</label>
          <textarea name="commentaire" v-model="experience.commentaire"></textarea>
        </div>
  
        <div class="input-field">
          <label for="commentaire">Commentaire Interne</label>
          <textarea name="commentaire" v-model="experience.commentaireInterne"></textarea>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="anneeJob">Année Contrat</label>
          <input type="date" v-model="experience.annee_job">
        </div>
  
        <div class="input-field">
          <label for="en_cours">En cours</label>
          <select name="en_cours" id="" v-model="experience.en_cours">
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="extraFrequence">Extra Fréquence</label>
          <input type="text" v-model="experience.extra_frequence">
        </div>
  
        <div class="input-field">
          <label for="commentaireExtra">Commentaire extra</label>
          <textarea name="commentaireExtra" id="" v-model="experience.commentaire_extra"></textarea>
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="autorisationVerif">Autorisation Vérification</label>
          <select name="autorisationVerif" id="" v-model="experience.autorisation_verif">
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </select>
        </div>
  
        <div class="input-field">
          <label for="qualification">Qualification</label>
          <input type="number" min="1" max="95" v-model="experience.qualification.id">
        </div>
      </div>
  
      <div class="form-row">
        <div class="input-field">
          <label for="categorie">Catégorie</label>
          <input type="number" min="1" max="62" v-model="experience.categorie.id">
        </div>
  
        <div class="input-field">
          <label for="idEtablissement">Id Établissement</label>
          <input type="text" v-model="experience.idEtablissement">
        </div>
      </div>
  
        <div>
          <button type="button" @click="submit">Submit</button>
        </div>
    </form>
  -->
    <div id="app">
      <!--
        <h1>EXPERIENCES UTILISATEURS</h1>
      -->
      <RouterLink to="/"></RouterLink>
      <RouterView></RouterView>
    </div>

</template>

<script>
import Experience from './model/Experience';
//import setExperience from './services/post-candidate-experience';
export default {
  name: 'App',
  data(){
    return{
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      text: "",
      textArea: "",
      select: "",
      experience : new Experience()
    }
  }/*,
  methods: {
    submit(){
      
      let formData= {
        textValue : this.text,
        textAreaValue: this.textArea,
        selectValue: this.select
      }
      console.log(formData)
      
      setExperience(this.experience)
      //console.log(this.experience)
    }
  }*/
}
</script>

<style>

body{
  background-color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-row{
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
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
