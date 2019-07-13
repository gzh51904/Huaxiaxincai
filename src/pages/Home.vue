<template>
    <div>
       <Header :keywork="key"></Header>
       HOme
    </div>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    name:"Home",
    data(){
        return {
            key:"Home"
        }
    },
    components:{
        Header
    }
}
</script>