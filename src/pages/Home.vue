<template>
    <div>
    <Header :keywork="key"></Header>
     <Footer></Footer>
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue"
export default {
    name:"Home",
    data(){
        return {
            key:"Home"
        }
    },
    components:{
         Header,
         Footer
    }
}

 
</script>