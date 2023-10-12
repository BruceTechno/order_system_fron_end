<script>
export default {
    data() {
        return {
            cartList:[],
        }
    },
    mounted() {
        fetch("http://localhost:8080/shopping_car_info", {
            credentials: 'include',
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               this.cartList = data.shoppingCarList
                console.log(this.cartList);
            })
    },
}
</script>

<template >
    <h1>shopping car here</h1>
    <p>{{ cartList }}</p>
</template>

<style lang="">
    
</style>