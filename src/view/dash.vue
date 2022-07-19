<template>
        <!-- navbar -->
        <nav-bar />
        <banner />
        <destination />
        <status />
        <exclusive />
        <review />
        <featured />
        <footer-component />


</template>
<script>
import nav from "/src/components/nav.vue"
import banner from "/src/components/banner.vue"
import destination from "/src/components/destination.vue"
import status from "/src/components/status.vue"
import exclusive from "/src/components/exclusive.vue"
import review from "/src/components/review.vue"
import featured from "/src/components/featured.vue"
import footer from "/src/components/footer.vue"


export default {
    name: "dash-bord",
        components: {
            'nav-bar':nav,
            'banner':banner,
            'destination':destination,
            'status':status,
            'exclusive':exclusive,
            'review':review,
            'featured':featured,
            'footer-component':footer
    
        }
}
</script>
