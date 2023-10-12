<script>
import SideBar from "../components/SideBar.vue"
import MenuCard from "../components/MenuCard.vue"
export default {
    data() {
        return {
            menuList: [],
            qty:0,
        }
    },
    components: {
        SideBar,
        MenuCard
    },
    mounted() {
        fetch("http://localhost:8080/all_menu", {
            credentials: 'include',
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.menuList = data.menuList;
                console.log(this.menuList);
            })
    },
    methods: {
        addCart(menuId) {
            const body = {
                "menuId": menuId,
                "qty": this.qty,
            }
            fetch("http://localhost:8080/add_cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert(data.message);
                })

        },
    },
}
</script>
<template>
    <h1>Home</h1>
    <div class="wrapper">
        <div>
            <SideBar />
        </div>
        <div v-for="(item, index) in menuList" :key="index">
            <!-- <p>{{ item.img }}</p> -->
            <MenuCard    :img="item.img" :price="item.price" :name="item.name" />
            <div class="qty">
                <label for="qty">數量</label>
                <input type="number" id="qty" inputmode="tel" v-model="qty">
            </div>
            <button type="button" @click="addCart(item.id)">add cart</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrapper {
    display: flex;
}
</style>