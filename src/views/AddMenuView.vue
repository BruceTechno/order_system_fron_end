<script>
export default {
    data() {
        return {
            img: null,
        }
    },
    methods: {
        getImg(e) {
            console.log(e);
            const img = e.target.files[0]

            const reader = new FileReader();
            reader.readAsDataURL(img)
            reader.onload = (e) => {
                this.img = e.target.result;
                console.log(this.img)
            }
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <div class="menu-info">
            <div class="margin name">
                <label for="name">名稱:</label>
                <input type="text" id="name">
            </div>


            <div class="margin price">
                <label for="price">價格:</label>
                <input type="text" id="price">
            </div>

            <div class="margin serve-time">
                <label class="serve-time" for="time">供應時間:</label>
                <select class="comSelect" v-model="category">
                    <option value="早">早</option>
                    <option value="晚">晚</option>
                    <option value="都有">都有</option>
                </select>
            </div>

            <div class="margin intro">
                <label for="intro">餐點介紹:</label>
                <textarea name="intro" id="intro" cols="30" rows="10" style="vertical-align:top;"></textarea>
            </div>
        </div>
        <div class="pic-box">
            <div class="pic">
                <input type="file" id="img" @change="getImg">
                <img :src="img" alt="">
            </div>
            <div class="btn-box">
                <button type="button">新增菜單</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 65vw;
    height: auto;

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
}</style>