<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: rgb(212, 110, 152);
    border: 1px solid rgb(212, 110, 152);
    cursor: pointer;
}
</style>