<template>
    <div>
        <h1> {{ $store.state.isAuth ? 'Пользователь авторизован' : 'Авторизируйтесь, чтобы воспользоваться сервисом' }} </h1>
        <h1> {{ $store.state.likes }} </h1>
        <div>
            <my-bytton @click="$store.commit('incrementLikes')">Like</my-bytton>
            <my-bytton @click="$store.commit('decrementLikes')">Dislike</my-bytton>
        </div>
        <h1> {{ $store.getters.doubleLikes }} </h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>