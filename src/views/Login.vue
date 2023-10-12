<script>
export default {
    data() {
      return {
         account:null,
         pwd:null,

      }
    },
    methods:{
      login(){
            const body = {
                "account": this.account,
                "pwd": this.pwd,
            }

            fetch("http://localhost:8080/login", {
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
                        sessionStorage.setItem("account",data.staff.account)
                    })


      }
    }
}
</script>

<template >
   <h1>login</h1>
   <div class="test">
   <div class="wrapper">
      <p>會員登入</p>

      <div class="account">
         <p>帳號
            <input type="text" v-model="account">
         </p>
      </div>

      <div class="pwd">
         <p>密碼
            <input type="text" v-model="pwd">
         </p>
      </div>

      <div class="btn-area">
         <button type="button" @click="login">登入</button>
         <button type="button">註冊</button>
      </div>

   </div>
</div>
</template>

<style lang="scss" scoped>

    .wrapper{
      border: 2px red solid;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: bisque;

    }
</style>