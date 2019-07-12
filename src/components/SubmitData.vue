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
    name: 'SubmitData',
    props: [],
    data: () => ({
        config: {
            url: "https://oyo.peliondev.com:8080/api/upload"
        }
    }),
    components: {
        vueDropzone
    }
};
</script>

<style scoped>
</style>