// Разметка
<template>
    <div>
        <div>
             <!-- v - ... -- диррективы  -->
            <button v-on:click="addLike">Like</button>
            <button @click="addDislike">Dislike</button>
        </div>
        <!-- интерполяция - {{ модель }} -->
        <div>Кол-во лайков - <strong>{{ likes }}</strong></div>
        <div>Кол-во дизлайков - <strong>{{ dislikes }}</strong></div>
    </div>
</template>
// Логика
<script>
// вседа возвращаем компонент
export default {
    data() {
        return {
            // модель
            likes: 0,
            dislikes: 0,
        }
    },
    // функции объявляются в поле methods у компонента
    methods: {
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.dislikes += 1;
        }
    }
}
</script>

<style>

</style>