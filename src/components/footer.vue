<template>  
    <span>
        <footer class=" footer  pt-5" >
            <div class="container-fluid">
                <div class="row justify-content-between footer-padding">
                    <div class="logo-block col-sm-12 col-lg-2 ps-lg-0">
                        <img src="../assets/img/footer/logo.png" class="mb-2 image-contain" alt="">
                        <p class="d-block my-2  w-100   ">
                            INDY GUIDE is the leading regional booking platform for local guides, drivers and tour operators in underrated destinations.
                        </p>
                    </div>
                    <div class="list-block col-sm-6 col-lg-2">
                        <h5 class="fw-bold mb-3  text-sm-start text-center  mt-sm-0 mt-3">
                            TOP DESTINATIONS
                        </h5>
                        <ul class="text-sm-start text-center  mt-sm-0 mt-3">
                            <li>
                                <a href="">Uzbekistan</a>
                            </li>
                            <li>
                                <a href="">Kyrgyzstan</a>
                            </li>
                            <li>
                                <a href="">Kazakhstan</a>
                            </li>
                            <li>
                                <a href="">Mongolia</a>
                            </li>
                            <li>
                                <a href="">Tajikistan</a>
                            </li>

                        </ul>
                    </div>
                    <div class="list-block col-sm-6 col-lg-2">
                        <h5 class="fw-bold mb-3  text-sm-start text-center  mt-sm-0 mt-3">
                            FOR TRAVELERS
                        </h5>
                        <ul class="text-sm-start text-center  mt-sm-0 mt-3">
                            <li>
                                <a href="">Sign up as Traveler</a>
                            </li>
                            <li>
                                <a href="">Add Trip Request</a>
                            </li>
                            <li>
                                <a href="">Submit a Blog Article</a>
                            </li>
                            <li>
                                <a href="">Ask Travel Advice</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div class="list-block col-sm-6 col-lg-2">
                        <h5 class="fw-bold mb-3  text-sm-start text-center  mt-sm-0 mt-3">
                            FOR LOCAL HOSTS
                        </h5>
                        <ul class="text-sm-start text-center  mt-sm-0 mt-3">
                            <li>
                                <a href="">Apply as Host</a>
                            </li>
                            <li>
                                <a href="">Add new listing</a>
                            </li>
                            <li>
                                <a href="">Submit a Blog Article</a>
                            </li>
                            <li>
                                <a href="">Add New Tip</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div class="list-block col-sm-6 col-lg-2">
                        <h5 class="fw-bold mb-3  text-sm-start text-center  mt-sm-0 mt-3">
                            NAVIGATION
                        </h5>
                        <ul class="text-sm-start text-center  mt-sm-0 mt-3">
                            <li>
                                <a href="">About Indy Guide</a>
                            </li>
                            <li>
                                <a href="">Our story</a>
                            </li>
                            <li>
                                <a href="">Our mission</a>
                            </li>
                            <li>
                                <a href="">Press & Media</a>
                            </li>
                            <li>
                                <a href="">Reviews</a>
                            </li>
                            <li>
                                <a href="">Terms of use</a>
                            </li>
                            <li>
                                <a href="">Contact us</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                <div class="row  py-3 copyright">
                    <div class="c-left col-lg-7 col-12  ps-md-0  px-sm-3 px-0">
                        <p class="mb-0 text-lg-start text-center  px-sm-3 px-0">
                            © Copyright
                            <span>2021</span>
                            INDY GUIDE Switzerland.All rights reserved
                            <a class="fw-bold mx-3  mt-sm-0 mt-2 d-inline-block">Imprint</a>
                            <a class="fw-bold mt-sm-0 mt-2 d-inline-block">Privacy</a>
                        </p>
                    </div>
                    <div class="c-right col-lg-5 col-12 d-flex mt-lg-0 mt-3 ">
                        <ul class=" d-flex flex-wrap   ms-lg-auto mx-auto mb-0 social-wrapper text-sm-start text-center">
                            <li>
                                <a href="">
                                    <fa :icon="['fab', 'facebook-f']" class="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <fa :icon="['fab', 'linkedin-in']" class="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <fa :icon="['fab', 'twitter']" class="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <fa :icon="['fab', 'pinterest']" class="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <fa :icon="['fab', 'instagram']" class="icon" />
                                </a>
                            </li>
                            <li class="m-0">
                                <a href="">
                                    <fa :icon="['fab', 'youtube']" class="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </span>
</template>
<script>
export default {
    name:"footer-component"
}
</script>
<style   lang="scss" scoped>
@import "/src/assets/scss/component/footer.scss";
</style>
