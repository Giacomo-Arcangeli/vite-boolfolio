<script>
export default {
    name: 'NotFoundPage',

};
</script>

<template>
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center bg-secondary">
        <h2 class="text-white">404 | Page not found</h2>
        <button class="btn btn-warning mt-2" @click="$router.back()">Back</button>
    </div>
</template>

<style scoped></style>