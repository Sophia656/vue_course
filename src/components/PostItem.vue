<template lang="">
    <div class="post">
        <div>
            <div>{{ post.id }}.</div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button
            @click="$router.push(`/posts/${post.id}`)"
            >
            Открыть
            </my-button>
            <my-button
            @click="$emit('remove', post)"
            >
            Удалить
            </my-button>
        </div>
        <!-- <div><strong>Название:</strong>Пост о JavaScript</div>
        <div><strong>Описание:</strong>JavaScript</div> -->
    </div>
</template>
<script>
export default {
    props: {
        post: {
            // тип
            type: Object,
            // пропс обязателен?
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns {
    display: flex;
}
</style>