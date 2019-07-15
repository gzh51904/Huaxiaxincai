<template>
    <div>
        <div class="nullMsg">
            <p class="nullIcon"></p>
            <p class="nullText">暂时没有进行中的项目</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nullMsg{
    margin-top: 20%;
}
.nullIcon{
    background: url(../img/nullIcon.png);
    width: 133px;
    height: 88px;
    background-size: 100% 100%;
    margin: 0 auto;
}
.nullMsg .nullText {
    margin-top: 30px;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 14px;
}
</style>
