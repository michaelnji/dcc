<script lang="ts">
    import WhyChooseUs from "$lib/components/sections/WhyChooseUs.svelte";
    import Cta from "$lib/components/sections/cta.svelte";
    import Feature from "$lib/components/sections/feature.svelte";
    import Footer from "$lib/components/sections/footer.svelte";
    import Info from "$lib/components/sections/info.svelte";
    import Reviews from "$lib/components/sections/reviews.svelte";
    import WhatWeDo from "$lib/components/sections/whatWeDo.svelte";
    import Cog from "svelte-heros-v2/Cog8Tooth.svelte";
    import Envelope from "svelte-heros-v2/Envelope.svelte";
    import Truck from "svelte-heros-v2/Truck.svelte";
    import WrenchScrewdriver from "svelte-heros-v2/WrenchScrewdriver.svelte";
</script>

<main class=" w-full p-0">
    <div class="  max-w-full hero">
        <div class="min-h-screen pt-24 pb-12 w-full bg-black bg-opacity-60">
            <div
                class="min-h-screen w-full px-6 md:px-10 lg:px-12 z-1 grid md:items-center pt-12"
            >
                <div class="max-w-6xl">
                    <h1
                        class="font-semibold text-5xl md:text-7xl xl:!text-8xl text-zinc-50 text-pretty font-head"
                    >
                    DC COMMANDER MOBILE TIRE & AUTO SERVICE <span
                            class="text-primary font-extrabold"> SHOP </span
                        >
                    </h1>
                    <div class="mt-12">
                        <div class="flex flex-wrap gap-3 max-w-3xl">
                            <div
                                class="glass p-4 rounded-xl text-zinc-50 flex gap-x-3 w-full md:w-max"
                            >
                                <Truck size="36" variation='solid' class="text-zinc-50 " />
                                <div>
                                    <h3
                                        class="font-bold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                                    >
                                        Full Tire Servicing
                                    </h3>
                                    <p class=" text-lg xl:text-xl opacity-80">
                                        24/7 support
                                    </p>
                                </div>
                            </div>
                            <div
                                class="glass p-4 rounded-xl text-zinc-50 flex gap-x-3 w-full md:w-max"
                            >
                                <Cog size="36" variation='solid' />
                                <div>
                                    <h3
                                        class="font-bold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                                    >
                                        PSI services
                                    </h3>
                                    <p class=" text-lg xl:text-xl opacity-80">
                                        Quick Delivery
                                    </p>
                                </div>
                            </div>
                            <div
                                class="glass p-4 rounded-xl text-zinc-50 flex gap-x-3 w-full md:w-max"
                            >
                                <WrenchScrewdriver
                                    size="36"
                                    variation='solid'
                                />
                                <div>
                                    <h3
                                        class="font-bold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                                    >
                                        Brakes check - Oil change
                                    </h3>
                                    <p class=" text-lg xl:text-xl opacity-80">
                                        Reliable maintenance
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12">
                            <a href="https://wa.link/x0qvmp"
                                class="btn btn-primary btn-lg !border-none !w-full sm:!w-max mx-auto md:mx-0"
                            >
                                <Envelope variation='solid' /> Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-28 md:mt-48 space-y-28 md:space-y-48">
        <WhatWeDo />
        <WhyChooseUs />
        <Feature />
        <Info />
        <Reviews />
        </div>
    <Cta />
   
</main>

<style>
    .hero {
        background: url("../lib/images/storefront.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
