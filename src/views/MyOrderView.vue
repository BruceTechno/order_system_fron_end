<script>
import SideBar from '../components/sidebar.vue'
export default {
    components: {
        SideBar,
    },
    data() {
        return {
            orderList: [],
        }
        
    },
    mounted() {
        fetch("http://localhost:8080/menu_from_order_by_consumer_id", {
            credentials: 'include',
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);    
                this.orderList = data.menuList;
                
                console.log(this.orderList);
            })
    },
    methods: {
        remove(product){
            console.log(product);
        }
    },
}
</script>
<template >
    <h1>my order here</h1>
    <div class="wrapper">
        <div class="sideBar">
            <SideBar />
        </div>
        <div class="content">
            <table>
                <thead>
                    <tr>
                        <th colspan="5">Order</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-title">
                        <td>123</td>
                        <td>訂單編號</td>
                        <td>餐點名稱</td>
                        <td>數量</td>
                        <td>時間</td>
                        <td></td>
                    </tr>
                    <tr v-for="(product,index) in orderList" :key="index">
                        <input type="checkbox" name="" id="">
                        <td>{{ product.orderId }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.qty }}</td>
                        <td>{{ product.time }}</td>
                        <td>
                            <button class="button-del" @click="remove(product)">×</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td colspan="3">Total <span class="total-price">$ {{ total }}</span></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
            <button class="checkout">前往付款</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
    }
</style>