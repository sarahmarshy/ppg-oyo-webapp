<template>
<html lang="en">
  <head>
    <base href="./" />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <title>Submit Data</title>
  </head>
  <body class="app header-fixed">
    <header class="app-header navbar">
      <img class="navbar-brand-full" src="../../public/img/logo.svg" width="89" height="25" />
      <ul class="nav navbar-nav d-md-down-none">
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item px-3">
          <a class="px-3" href="/submitdata">Submit Data</a>
        </li>
      </ul>
    </header>
  </body>
  <body class="app header-fixed">
  <header class="app-header navbar">
    <img class="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" />
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="submitData.html">Submit Data</a>
      </li>
    </ul>
  </header>
  <div class="app-body">
    <main class="main">
      <div class="container-fluid">
        <div class="animated fadeIn">
            <div class="row justify-content-center">
              <div class="col align-self-center mt-4">
                <vue-dropzone id="upload-widget" :options="config"></vue-dropzone>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
</template>

<script>
import vueDropzone from "vue2-dropzone";

export default {
    name: 'IncidentForm',
    props: [],
    data: () => ({
        config: {
            url: "https://oyo.peliondev.com:8080/api/upload"
        }
    }),
    components: {
        vueDropzone
    },
    computed: {
    },
    watch: {
    },
    mounted() {
        // start 2 min countdown timer
        setInterval(() => {
            if (this.countdown_timer > 0) {
                this.countdown_timer -= 1;
                this.countdown_display = `${parseInt(this.countdown_timer / 60, 10)}m ${this.countdown_timer % 60}s`;
            } else {
                this.countdown_display = 'EXPIRED';
            }
        }, 1000);
    },
    methods: {
        submitForm() {
            // HTTP POST request to 'https://regus.peliondev.com:8080/api/staffresponse'
            this.$http.post('https://regus.peliondev.com:8080/api/staffresponse', {
                staff_id: this.staff_id,
                property: this.property,
                floor_num: this.floor_num,
                room_id: this.room_id,
                room_type: this.room_type,
                room_occupied: this.room_occupied,
                member_status: this.member_status,
                vacate: this.vacate,
                add_time: this.add_time,
                compliance: this.compliance,
                submit_time: Math.round((new Date()).getTime() / 1000),
            // eslint-disable-next-line no-unused-vars
            }).then((data) => {});
        },
    },
};
</script>

<style scoped>

</style>
