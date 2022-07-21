<template>
  <div>
    <nav class="navigation-indy position-fixed w-100 p-0">
      <div class="d-flex flex-wrap align-items-center container-fluid">
        <span class="d-sm-none d-inline-block">
          <button  @click="isHidden = true"  class="bg-transparent border-transparent" >
            <fa  icon="bars" class="icon mt-1 text-white fs-2 arrow" />
          </button>

        </span>
        <a href="" calss=" logo  outline-none ">
          <img src="../assets/img/nav/logo-main.png" alt="" />
        </a>
        <ul
          class="
            left-sidebar
            mb-0
            d-lg-flex d-none
            flex-wrap
            align-items-center
            mb-0
          "
        >
          <li class="dropdown-button">
            <a @click.prevent="arrowDown($event)" href="">
              <span>DESTINATIONS</span>
              <fa icon="chevron-down" class="mt-1 arrow" />
            </a>
            <ul class="dropdown">
              <div class="px-0 container">
                <div class="custom-accordion mx-3 pt-5">
                  <h4 data-v-d34e7b72="" class="d-block mb-4">
                    Select Your Destination
                  </h4>
                  <div class="row align-items-center">
                    <div class="col-3 btn-block">
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Uzbekistan
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Kyrgyzstan
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Kazakhstan
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Mongolia
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3 btn-block">
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Tajikistan
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Pakistan
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Azerbaijan
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            India
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3 btn-block">
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Georgia
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Russia
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Nepal
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Turkmenistan
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3 btn-block">
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Armenia
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Iran
                          </a>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Bhutan
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          <li>
            <a href="">
              <span>Listings</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Travel Advice</span>
            </a>
          </li>
          <li class="m-0">
            <a href="">
              <span>Blog</span>
            </a>
          </li>
        </ul>
        <ul
          class="
            right-sidebar
            ms-sm-auto ms-0
            d-flex
            flex-wrap
            align-items-center
            mb-0
          "
        >
          <li class="d-ms-inline-block d-none">
            <a href="">
              <span> APPLY AS HOST </span>
            </a>
          </li>
          <li class="butn d-lg-block d-md-block d-sm-block d-none">
            <a href="" class="text-uppercase btn btn-primary px-3"
              >sign up as traveler</a
            >
          </li>
          <li class="user-img me-lg-0">
            <a href="">
              <img src="../assets/img/nav/user-main.png" alt="" />
            </a>
          </li>
          <li class="d-lg-none m-0 d-sm-inline-block d-none d-inline">
          <button  @click="isHidden = true"  class="bg-transparent border-transparent" >
            <fa  icon="bars" class="icon mt-1 text-white fs-2 arrow" />
          </button>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="isHidden"  class="position-fixed sidebar">
      <div class="overlay-sidebar w-100 h-100 position-absolute"></div>
      <div class="menu-bar h-100 bg-white ms-sm-auto ms-0  me-sm-0 me-auto position-relative">
          <div class="button d-flex flex-wrap align-items-center mb-4">
            <button @click="isHidden =  false" class="btn cross-btn rounded-circle ms-auto d-flex flex-wrap align-items-center justify-content-center p-0">
              <span>x</span>
            </button>
          </div>
          <ul>
            <li>
              <a href="">DESTINATIONS</a>
            </li>
             <li>
              <a href="">LISTINGS</a>
            </li>
             <li>
              <a href="">TARAVEL ADVICE</a>
            </li>
             <li>
              <a href="">BLOG</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "nav-bar",

  setup(){
    let isHidden = ref(false);
    return{
      isHidden
    }
  },



  methods: {
    arrowDown(event) {
      const active = document.querySelectorAll(".show");
      active.forEach((node) => {
        if (node != event.currentTarget.parentNode) {
          node.classList.remove("show");
        }
      });
      event.currentTarget.parentNode.classList.toggle("show");
    },

  },



};
</script>
<style lang="scss" scoped>
@import "/src/assets/scss/component/nav.scss";
</style>