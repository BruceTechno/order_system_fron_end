<script>
export default {
    props:["id","img","price","name"],
    data() {
        return {
            qty:0,
        }
    },
    methods: {
        addCart(){
            console.log(this.qty);
            // this.$emit("callOutside",this.inputText)
            // const body = {
            //     "menuId": this.id,
            //     "qty": this.qty,
            // }
            // fetch("http://localhost:8080/add_cart", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         credentials: 'include',
            //         body: JSON.stringify(body)
            //     })
            //         .then(res => res.json())
            //         .then(data => {
            //             console.log(data);
            //             alert(data.message);
            //             // sessionStorage.setItem("account",data.staff.account)
            //         })

        },
      
    },
    mounted() {

    },
}
</script>

<template>
    <h1>menu card  |</h1>
    <div class="wrapper">
        <div class="img-class">
            <img :src=img alt="">
        </div>
        <div class="name">
            <p>餐點名稱: {{ name }}</p>
        </div>
        <div class="price">
                <p>單價: {{ price }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper{
        border: 1px red solid;
    }
</style>