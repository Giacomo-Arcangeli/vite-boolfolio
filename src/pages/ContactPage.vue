<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';

export default {
    name: 'ContactPage',
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: '',
        },
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
        }
    }
};
</script>

<template>
    <div class="container">

        <h1 class="my-5">Contact Us</h1>
        <form @submit.prevent="sendForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"
                    v-model.trim="form.email">
            </div>
            <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" v-model.trim="form.message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style scoped></style>