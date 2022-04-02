
<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <input type="text" v-model.trim="modificatorValue">
        <my-button
        @click="showDialog"
        style="margin: 15px 0"
        >
            Создать пост
        </my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
        </my-dialog>
        <post-list 
        :posts="posts"
        @remove="removePost"
        />
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from './components/UI/MyDialog.vue';
import MyButton from './components/UI/MyButton.vue';
export default {
    components: {
        PostList, PostForm,
        MyDialog,
        MyButton
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Описание поста'},
                {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
                {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'}
            ],
            dialogVisible: false,
            modificatorValue: ''
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        }
        // inputTitle(event) {
        //     this.title = event.target.value
        // },
    }
}
</script>
// scoped -- доступны только этому компоненту
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
</style>