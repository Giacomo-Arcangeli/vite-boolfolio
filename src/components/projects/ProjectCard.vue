<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        projectDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const projectDate = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;

            return projectDate;
        },
        abstract() {
            const abstract = this.project.description.slice(0, 220);
            return abstract + '...';
        }
    }
};

</script>

<template>
    <div class="col-1"></div>
    <div class="col-10">
        <div class="card mb-5">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ abstract }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <a href="#" class="btn btn-primary">More details</a>
                    <div class="small">
                        <strong>Created on: </strong>{{ projectDate }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-1"></div>
</template>

