<template >
  <div>
    <nav id="na-v" class="navigation-indy na-v position-fixed w-100 p-0">
      <div class="d-flex flex-wrap align-items-center container-fluid">
        <span class="d-sm-none d-inline-block">
          <button @click="sidebar = true" class="bg-transparent border-transparent">
            <img src="../assets/img/base/burger-menu.svg" alt="">
          </button>
        </span>
        <a href="" calss=" logo  outline-none ">
          <img src="../assets/img/nav/logo-main.png" alt="" />
        </a>
        <ul class="left-navbar d-lg-flex d-none flex-wrap">
          <li @click="dropDown = !dropDown" class="dropdown-button">
            <button class=" btn bg-transparent border-transparent">
              <span>DESTINATIONS</span>
             <img src="../assets/img/base/down.png" alt="">
            </button>
          </li>
          <div v-if="dropDown" id="drop1" class="drop1">
            <ul class="dropdown">
              <div class="px-0 container">
                <div class="custom-accordion pt-5">
                  <h4  class="d-block mb-4">
                    Select Your Destination
                  </h4>
                  <div class="row align-items-center">
                    <div class="col-3 btn-block btn-block1 ">
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
                          <button
                            @click.prevent="arrowDown($event)"
                            class="
                              position-relative
                              ms-auto
                              border-0
                              bg-transparent
                            "
                          >
                            <img src="../assets/img/base/arrow-dark-gray.svg" alt="" class="icon">
                          </button>

                          <div class="accordion-body">
                            <ul class="list-countries ps-3 pt-2">
                              <li class="d-flex flex-wrap align-items-center">
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                              <li class="d-flex flex-wrap align-items-center">
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                              <li
                                class="
                                  d-flex
                                  border-0
                                  flex-wrap
                                  align-items-center
                                "
                              >
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="btn-bg mb-3">
                        <div class="d-flex align-items-center flex-wrap">
                          <a href="" class="text-capitalize text-truncate ps-3">
                            Mongolia
                          </a>
                          <button
                            @click.prevent="arrowDown($event)"
                            class="
                              position-relative
                              ms-auto
                              border-0
                              bg-transparent
                            "
                          >
                            <img src="../assets/img/base/arrow-dark-gray.svg" alt="" class="icon">
                          </button>
                          <div class="accordion-body">
                            <ul class="list-countries ps-3 pt-2">
                              <li class="d-flex flex-wrap align-items-center">
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                              <li class="d-flex flex-wrap align-items-center">
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                              <li
                                class="
                                  d-flex
                                  border-0
                                  flex-wrap
                                  align-items-center
                                "
                              >
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                            </ul>
                          </div>
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
                    <div class="col-3 btn-block ">
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
                          <button
                            @click.prevent="arrowDown($event)"
                            class="
                              position-relative
                              ms-auto
                              border-0
                              bg-transparent
                            "
                          >
                            <img src="../assets/img/base/arrow-dark-gray.svg" alt="" class="icon">
                          </button>
                          <div class="accordion-body">
                            <ul class="list-countries ps-3 pt-2">
                              <li class="d-flex flex-wrap align-items-center">
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                              <li class="d-flex flex-wrap align-items-center">
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                              <li
                                class="
                                  d-flex
                                  border-0
                                  flex-wrap
                                  align-items-center
                                "
                              >
                                <a href="" class="float-start img-a">
                                  <img
                                    src="../assets/img/nav/img-1.jpg"
                                    class="rounded-circle image-cover"
                                    alt=""
                                  />
                                </a>
                                <a
                                  class="
                                    float-start
                                    max-50
                                    py-0
                                    ps-3
                                    text-a text-capitalize
                                  "
                                  href=""
                                >
                                  Almaty Region
                                </a>
                              </li>
                            </ul>
                          </div>
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
                    <div class="col-3 btn-block btn-block3">
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
          </div>
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
            right-navbar
            ms-sm-auto ms-0
            d-flex
            flex-wrap
            align-items-center
            mb-0
          "
        >
          <li class="d-md-inline d-none">
            <a href="">
              <span>MAKE A REQUEST</span>
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
            <button @click="sidebar = true" class="bg-transparent border-transparent">
              <img src="../assets/img/base/burger-menu.svg" alt="">
              <!-- <fa icon="bars" class="icon mt-1 text-white fs-2 arrow" /> -->
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <div id="sideBar" v-if="sidebar" class="position-fixed sidebar">
      <div class="overlay-sidebar w-100 h-100 position-absolute"></div>
      <div
        id="sideRemove"
        class="
          menu-bar
          h-100
          bg-white
          ms-sm-auto ms-0
          me-sm-0 me-auto
          position-relative
        "
      >
        <div class="button d-flex flex-wrap align-items-center mb-4">
          <button
            @click="sidebar = false"
            class="
              btn
              cross-btn
              rounded-circle
              ms-auto
              d-flex
              flex-wrap
              align-items-center
              justify-content-center
              p-0
            "
          >
            <span>x</span>
          </button>
        </div>
        <ul>
          <li @click="destiNation = true; sidebar = false;">
            <a>DESTINATIONS</a>
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
    <div id="destination" v-if="destiNation" class="destination position-fixed ">
      <div class="overlay-menu w-100 h-100 position-absolute"></div>
      <div id="destiRemove" class="side-menu-bar h-100 bg-white  ms-sm-auto ms-0  me-sm-0 me-auto position-relative">
        <div class="menu-header d-flex flex-wrap align-items-center mb-4">
          <p  class="mb-0">
            <a @click="sidebar = true; destiNation = false;" >
               <img src="../assets/img/base/back.png" class ="me-2">
              
							Destinations
            </a>
          </p>
          <button @click="destiNation = false" class="btn  rounded-circle ms-auto d-flex flex-wrap align-items-center justify-content-center p-0">x</button>
        </div>
        <ul class="">
          <li class="d-flex  flex-wrap align-items-center">
            <a href="" class="fw-bold">Uzbekistan</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Kyrgyzstan</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Kazakhstan</a>
             <img @click.prevent="arrowDown($event)"  src="../assets/img/base/down.png" alt="" class="ms-auto icon">
             <ul class="w-100">
              <li class="d-flex first-mt flex-wrap align-items-center">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">Almaty Region</a>
              </li>
              <li class="d-flex flex-wrap align-items-center">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">Nur Sultan</a>
              </li>
              <li class="d-flex flex-wrap align-items-center">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">Turkestan</a>
              </li>
              <li class="d-flex flex-wrap align-items-center">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">Mangystau</a>
              </li>
              <li class="d-flex flex-wrap align-items-center pb-0">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">East Kazakhstan</a>
              </li>
             </ul>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Mongolia</a>
            <img @click.prevent="arrowDown($event)"  src="../assets/img/base/down.png" alt="" class="ms-auto icon">
             <ul class="w-100">
              <li class="d-flex first-mt flex-wrap align-items-center">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">Almaty Region</a>
              </li>
              <li class="d-flex flex-wrap align-items-center pb-0">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">East Kazakhstan</a>
              </li>
             </ul>
            
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Tajikistan</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Pakistan</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">India</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Azerbaijan</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Georgia</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Russia</a>
            <img @click.prevent="arrowDown($event)"  src="../assets/img/base/down.png" alt="" class="ms-auto icon">
             <ul class="w-100">
              <li class="d-flex first-mt flex-wrap align-items-center">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">Almaty Region</a>
              </li>
              <li class="d-flex flex-wrap align-items-center pb-0">
                <img src="../assets/img/nav/img-1.jpg" class="shadow-lg" alt="">
                <a href="" class="ps-3 ">East Kazakhstan</a>
              </li>
             </ul> 
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Nepal</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Turkmenistan</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Armenia</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Iran</a>
          </li>
          <li class="d-flex flex-wrap align-items-center">
            <a href="" class="fw-bold">Bhutan</a>
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
  setup() {
    let destiNation = ref(false);
   let dropDown = ref(false);
   let sidebar = ref(false);
    const container = ref();
    let nav = ref();
    let side = ref();
    let desti = ref();
    container.value = document.getElementById("drop1");

    document.addEventListener("mouseup", function (e) {
      container.value = document.getElementById("drop1");
      if (!container.value.contains(e.target)) {
            dropDown.value = false;        
      }
    });
    document.addEventListener("mouseup", function (e) {
      side.value = document.getElementById("sideRemove");
       if (!side.value.contains(e.target)) {
            sidebar.value = false;        
      }
    });
    document.addEventListener("mouseup", function (e) {
      desti.value = document.getElementById("destiRemove");
       if (!desti.value.contains(e.target)) {
            destiNation.value = false;        
      }
    });

    window.addEventListener("scroll", function () {
      nav.value = this.document.getElementById("na-v");
      if (window.scrollY > 600) {
        nav.value.style.background = "#00000080";
      } else {
        nav.value.style.background = "transparent";
      }
    });
    return {
      sidebar,
      dropDown,
      destiNation,
    };
  },
  methods: {
    arrowDown(event) {
      event.currentTarget.parentNode.classList.toggle("show");
    },
   
  },
};
</script>
<style lang="scss" scoped>
@import "/src/assets/scss/component/nav.scss";
</style>