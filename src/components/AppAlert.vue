<script>
export default {
    name: 'AppAlert',
    props: { isOpen: Boolean },
    emits: ['close']
};
</script>

<template>
    <div v-if="isOpen" class="alert alert-danger alert-dismissible fade show my-3" role="alert">
        <strong>Danger!</strong> An error occurred during the call.
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>

<style scoped></style>