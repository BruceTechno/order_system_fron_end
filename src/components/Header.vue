<script>
import { RouterLink } from 'vue-router';

export default {

}
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="logo">
                <RouterLink to="/">
                <img src="123321.jpg"  alt="">
            </RouterLink>
            </div>
            <div class="function-group">
                <div class="addPerson">
                    <RouterLink class="link" to="/add-person">新增人員</RouterLink>
                </div>
                <div class="addMenu">
                    <RouterLink class="link" to="/add-menu">新增菜單</RouterLink>
                </div>
                <div class="addOrder">
                    <RouterLink class="link" to="/cartView">購物車</RouterLink>
                </div>
                <div class="myOrder">
                    <RouterLink class="link" to="/my-order">我的訂單</RouterLink>
                </div>
                <div class="login">
                    <RouterLink class="link" to="/login">登入</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: blanchedalmond;
    width: 100%;

    font-size: 2rem;
    
}
.logo{
        width: 100px;
        height: 100px;
        margin-left: 19px;
    img{
        width: 100%;
        height: 100%;
        // width: 100px;
        // height: 100px;
        // margin:30px 10px 30px 30px
    }
}
.link{
    text-decoration: none;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;
  
    
}
.wrapper{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 1rem;
}
.function-group {
    display: flex;
    margin-bottom: 10px;
}
</style>