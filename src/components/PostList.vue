<template>
    <div class="post" v-for="post in posts">
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
            <!-- <div><strong>Название:</strong>Пост о JavaScript</div>
            <div><strong>Описание:</strong>JavaScript</div> -->
        </div>
</template>
<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.post {
    padding: 15px;
    border: 2px solid rgb(212, 110, 152);
    margin-top: 15px;
}
</style>