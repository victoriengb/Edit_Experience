<template>
    <div class="container">
        <RouterLink class="experience" v-for="experience, index in  experiences" :key="index" :to="{name : 'experience', params:{id : experience.id}}">
            <div class="ag-courses-item_bg"></div>
            <p>{{ experience.nom }} </p> 
            <p>{{ experience.code_postal }} </p>
            <p>{{ experience.ville }}</p>
            <p>{{ experience.note }} </p>
            <p>{{ experience.contrat }}</p>
            <p>{{ formatDate(experience.debut) }}</p>
            <p>{{ formatDate(experience.fin) }}</p>
            <p>{{ formatDate(experience.created_at) }}</p>
            <!--
                <p>{{ experience.categorie.nom }}</p>
            -->
            <p>{{ experience.qualification.nom }}</p>
        </RouterLink>
    </div>
</template>

<script>
    import dayjs from "dayjs";

    export default{
        name : 'HomePage',
        computed : {
            experiences(){
                return this.$store.getters.getExperiences
            }
        },
        methods : {
            formatDate(date){
                return dayjs(date).format('DD/MM/YYYY')
            }
        }
    }
</script>

<style>
    p{
        margin: 5px;
    }


    .container {
        margin: 0 auto;

        font-family: "Bona Nova", serif;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: stretch;
        align-content: center;
        gap: 10px 30px;
    }

    .experience{

        /*
        align-self: flex-start;
        
        padding: 2px 16px;

        background-color: #e3f2fd;
        color: black;
        text-decoration: none;

        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 20px;
        box-sizing: border-box;
        margin: 10px;

        max-width: 34%;
        white-space: nowrap;
        */

        /******************************** */

        flex-basis: calc(33.33333% - 30px);

        margin: 0 15px 30px;

        overflow: hidden;

        border-radius: 28px;

        /******************************* */

        display: block;
        padding: 30px 20px;
        background-color: #121212;

        position: relative;

        /************************* */

        font-size: 30px;
        color: #FFF;
        text-decoration: none;

        /************************** */

    }

    .ag-courses-item_bg{
        height: 128px;
        width: 128px;
        background-color: #f9b234;

        z-index: 1;
        position: absolute;
        top: -75px;
        right: -75px;

        border-radius: 50%;
    }

    .experience:nth-child(n) .ag-courses-item_bg {
        background-color: #3ecd5e;
    }
    .experience:nth-child(n):hover{
        background-color: #3ecd5e;

        -webkit-transition: all .5s ease;
        -o-transition: all .5s ease;
        transition: all .5s ease;
        border-radius: 20%;
    }

    .experience:nth-child(2n) .ag-courses-item_bg {
        background-color: #e44002;
    }
    .experience:nth-child(2n):hover {
        background-color: #e44002;
    }


    .experience:nth-child(3n) .ag-courses-item_bg {
        background-color: #952aff;
    }
    .experience:nth-child(3n):hover {
        background-color: #952aff;
    }

    .experience:nth-child(4n) .ag-courses-item_bg {
        background-color: #cd3e94;
    }
    .experience:nth-child(4n):hover {
        background-color: #cd3e94;
    }


    .experience:nth-child(5n) .ag-courses-item_bg {
        background-color: #4c49ea;
    }
    .experience:nth-child(5n):hover {
        background-color: #4c49ea;
    }

    .experience:nth-child(6n) .ag-courses-item_bg {
        background-color: #f9b234;
    }
    .experience:nth-child(6n):hover {
        background-color: #f9b234;
    }
</style>