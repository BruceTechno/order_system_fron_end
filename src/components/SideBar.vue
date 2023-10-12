<script>
export default {
    data() {
        return {
            categoryList : [],
        }
    },
    mounted() {
        fetch("http://localhost:8080/all_category", {
            // credentials: 'include',
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.categoryList = data.categoryList
                
            })

    },

}
</script>

<template >
    <div class="wrapper">
        
            <div v-for="(item,index) in categoryList" :key="index" >
                <p class="category">{{ item }}</p>
                
            </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .wrapper{
        width: 300px;
        height: 50vh;
        background-color: antiquewhite;
        margin: 0 2rem;
        flex-direction: column;
        justify-content:last baseline;
        align-items:end;
    }
    
    .category{
        font-size: 2rem;
        margin: 0, 1rem;
        
    }
</style>