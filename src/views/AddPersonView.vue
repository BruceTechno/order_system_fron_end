<script>
export default {
    
}
</script>

<template>
      <h1>add person here</h1>  
      <div class="wrapper">
        <div class="menu-info">
            <div class="margin account">
                <label for="account">帳號:</label>
                <input type="text" id="account">
            </div>


            <div class="margin pwd">
                <label for="pwd">密碼:</label>
                <input type="text" id="pwd">
            </div>

            <div class="margin name">
                <label for="name">姓名:</label>
                <input type="text" id="name">
            </div>

            <div class="margin phone">
                <label for="phone">電話:</label>
                <input type="text" id="phone">
            </div>

            <div class="margin mail">
                <label for="mail">信箱:</label>
                <input type="text" id="mail">
            </div>
        </div>
        <div class="pic-box">
            <div class="pic">
                <input type="file" id="img" @change="getImg">
                <img :src="img" alt="">
            </div>
            <div class="btn-box">
                <button type="button">新增人員</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
    width: 65vw;

    // border: 2px red solid;
    background-color: beige;
    display: flex;
    justify-content: space-around;
    margin: 10rem;
    font-size: 24px;

}
input,
    button {
        font-size: 24px;
    }
    
    
.margin {
    margin-top: 17px;

    label {
        margin-right: 16px;
    }
}

.name,
.pic {
    margin-top: 3rem;
}

.intro,
.btn-box {
    margin-bottom: 3rem;
}

.pic-box {
    margin-right: 5rem;
    .pic {
        width: 150px;
        height: 150px;
        margin-bottom: 70px;

        input {
            margin-bottom: 2rem;
        }
    }
    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        display: block;
        object-fit: contain;
    }
    .btn-box{
        margin-top: 8rem;
    }
    }
</style>