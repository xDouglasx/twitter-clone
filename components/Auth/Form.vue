<script setup>
import useAuth from '~~/composables/useAuth';

    const data = reactive({
        password: '',
        username: '',
        loading: false
    })

    

    async function handleLogin(){
        const { login } = useAuth()
        data.loading = true;

        try {
            await login({
                username: data.username,
                password: data.password
            })
        } catch (error) {
            console.log(error)

        } finally {

        }
    }
   
</script>

<template>
    <div class="pt-5 space-y-6">
        <u-i-input label="Username" placeholder="@username" type="text" v-model="data.username"></u-i-input>
        <u-i-input label="Password" placeholder="*********" type="password" v-model="data.password"></u-i-input>

        <div>
            <button @click="handleLogin">Login</button>
        </div>
    
    </div>
</template>