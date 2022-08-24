<template>
  <div class="footer bg-dark py-3 no-print">
    <div class="container-fluid">
      <ul class="list-inline text-center">
        <li class="list-inline-item text-light">
          © Copyright 2022 MetaHorse
        </li>
      </ul>
      <ul class="list-inline text-center">
        <li class="list-inline-item">
          <a class="text-light" href="#" @click.prevent="">
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item ms-2">
          <a class="text-light" href="#" @click.prevent="">
            <i class="bi bi-messenger"></i>
          </a>
        </li>
        <li class="list-inline-item ms-2">
          <a class="text-light" href="#" @click.prevent="">
            <i class="bi bi-instagram"></i>
          </a>
        </li>
        <li class="list-inline-item ms-2">
          <a
            class="text-light"
            href=""
            target="_blank"
          >
            <i class="bi bi-github"></i>
          </a>
        </li>
      </ul>
      <ul class="list-inline text-center">
        <li class="list-inline-item text-light">
          個人練習作品，非商業用途
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  z-index: 100;
  height: 130px;
}
</style>
