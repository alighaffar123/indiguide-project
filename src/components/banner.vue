<template>
    <section class="banner-section position-relative top-0">
        <div class="video position-relative w-100  overflow-hidden ">
            <div class="video-title-overlay text-white">
                <p class=" text-center mb-2">
                    Local Guides, Drivers, Tours
                </p>
                <h1 class="text-center ">
                    Lifechanging Experiences
                </h1>
            </div>
            <div class=" video-wrapper d-md-block d-none ">
                <div class=" gradaint-bg position-absolute w-100 h-100  "></div>
                <div class="primary-gradiant position-absolute w-100 h-100 "></div>
                <div class="overlay position-absolute w-100 h-100 "></div>
                <video autoplay loop muted class="psoition-lg-absolute w-100 position-static" >
                    <source src="../assets/video/banner.mp4" type="video/mp4" >
                </video>
            </div>
        
        

        </div>
        <div class="search position-absolute ">
            <form action="">
                <div class="row  m-0">
                    <div class="search-select px-2 col-sm-6  col-lg  ">
                        <fieldset  class="mb-0  position-relative "  >
                            
                            <input @click.prevent="arrowDown($event)" type="text" placeholder="Select Destinations">
                            <a href="" @click.prevent="arrowDown($event)">
                                <fa icon="chevron-down" class=" position-absolute  arrow "/>
                            </a>
                            <div class="country">
                                <ul class="" >
                                    <li>
                                        <span>pakistan</span>
                                    </li>
                                    <li>
                                        <span>
                                            Afghanistan
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Albania
                                        </span>
                                    </li>
                                    <li>
                                        <span>Canada</span>
                                    </li>
                                    <li>
                                        <span>China</span>
                                    </li>
                                    <li>
                                        <span>Croatia</span>
                                    </li>
                                    <li>
                                        <span>Djibouti</span>
                                    </li>
                                    <li>
                                        <span>Egypt</span>
                                    </li>
                                    <li>
                                        <span>Fiji</span>
                                    </li>
                                    <li>
                                        <span>Ghana</span>
                                    </li>
                                    <li>
                                        <span>india</span>
                                    </li>
                                    <li>
                                        <span>Italy</span>
                                    </li>
                                </ul>
                            </div>
                        </fieldset>
                    </div>
                     <div class="single-select col-sm-6  col-lg px-2  mt-sm-0 mt-4">
                        <fieldset  class="mb-0  position-relative "  >
                            
                            <input readonly @click.prevent="arrowDown($event)" type="text" placeholder="Select Destinations">
                            <a href="" @click.prevent="arrowDown($event)">
                                <fa icon="chevron-down" class=" position-absolute  arrow "/>
                            </a>
                            <div class="country">
                                <ul class="" >
                                    <li>
                                        <span>Tour & Activities </span>
                                    </li>
                                    <li>
                                        <span>
                                            Drivers
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Rental Cars
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Transfers
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Special Accommodation
                                        </span>
                                    </li>
                                    
                                   
                                </ul>
                            </div>
                        </fieldset>
                    </div>
                   <div class="button px-2 mt-lg-0 mt-4 mx-lg-0 mx-auto col-sm-6 col-lg">
                     <input value="Search"  type="submit" class=" text-white fs-6 ">
                   </div>
                </div>
            </form>
        </div>
        
        <div class="wrapper w-100 clearfix d-flex ">
            <div class="wrapper-cover cover-1 float-left text-center ">
                <div class="icon">
                    <img src="../assets/img/header/verified.svg" alt="" class="image-contain w-100 h-100">
                    
                </div>
                <div class="text">
                    <h4 class="mb-0 d-md-inline d-block ">Verified </h4>
                    <span class=" d-md-inline d-block">Hosts</span>
                </div>
            </div>
            <div class="wrapper-cover cover-2 float-left text-center ">
                <div class="icon">
                    <img src="../assets/img/header/selection.svg" alt="" class="image-contain w-100 h-100">
                    
                </div>
                <div class="text">
                    <h4 class="mb-0 d-md-inline d-block">Largest </h4>
                    <span class="d-lg-inline d-md-inline d-block">Selection</span>
                </div>
            </div>
            <div class="wrapper-cover cover-3 float-left text-center ">
                <div class="icon">
                    <img src="../assets/img/header/customized.svg" alt="" class="image-contain w-100 h-100">
                    
                </div>
                <div class="text">
                    <h4 class="mb-0 d-md-inline d-block">Customized </h4>
                    <span class="d-lg-inline d-md-inline d-block">Trips</span>
                </div>
            </div>
            <div class="wrapper-cover cover-4 float-left text-center ">
                <div class="icon">
                    <img src="../assets/img/header/insider.svg" alt="" class="image-contain w-100 h-100">
                    
                </div>
                <div class="text">
                    <h4 class="mb-0 d-md-inline d-block">Insider </h4>
                    <span class="d-lg-inline d-md-inline d-block">Tips</span>
                </div>
            </div>
            
        </div>
    </section>
</template>
<script>


  export default {
    name:"banner-page",

    methods: {
        arrowDown(event) {
        const active = document.querySelectorAll(".show");
        active.forEach((node) => {
            if (node != event.currentTarget.parentNode) {
            node.classList.remove("show");
            }
        });
        event.currentTarget.parentNode.classList.toggle("show");
        }
    }
   
  };
</script>

<style   lang="scss" scoped>
@import "/src/assets/scss/component/banner.scss";
</style>