<script lang="ts">
    import i from "../../images/fixing-car.jpg";
    import Cog from "svelte-heros-v2/Cog8Tooth.svelte";
    import CodeBracketSquare from "svelte-heros-v2/CodeBracketSquare.svelte";
    import Truck from "svelte-heros-v2/Truck.svelte";
    import WrenchScrewdriver from "svelte-heros-v2/WrenchScrewdriver.svelte";
</script>

<div class=" w-full wall">
    <div
        class=" px-5 sm:px-10 md:px-12 xl:px-24 grid grid-cols-1 xl:grid-cols-2 place-items-center"
    >
        <div class="text max-w-xl">
            <h1 class="font-semibold text-4xl md:text-5xl lg:text-6xl">
                Discover <span class="text-primary">our offers!</span>
            </h1>
            <p class="mt-2 text-lg md:text-xl text-pretty opacity-70">
                Experience the ultimate convenience with DC COMMANDER MOBILE TIRE & AUTO MOBILE SHOP, where tire
                service and replacement come directly to you. Save time and
                money by skipping the trip to the tire shop. Our tire services
                includes:
            </p>
            <div class="mt-12">
                <div class="flex flex-wrap gap-10 lg:gap-12">
                    <div class="  rounded-xl flex gap-x-3 w-max">
                        <Truck size="36" variation='solid' class=" " />
                        <div>
                            <h3 class="font-bold text-xl md:text-2xl">
                                Full Tire Servicing
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                24/7 support
                            </p>
                        </div>
                    </div>
                    <div class="  rounded-xl flex gap-x-3 w-full md:w-max">
                        <Cog size="36" variation='solid' />
                        <div>
                            <h3 class="font-bold text-xl md:text-2xl">
                                Rim Seal - PSI
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Quick Delivery
                            </p>
                        </div>
                    </div>
                    <div class="  rounded-xl flex gap-x-3 w-full md:w-max">
                        <WrenchScrewdriver size="36" variation='solid' class=" " />
                        <div>
                            <h3 class="font-bold text-xl md:text-2xl">
                                Brakes & Oil change
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Reliable maintenance
                            </p>
                        </div>
                    </div>
                    <div class="  rounded-xl flex gap-x-3 w-full md:w-max">
                        <CodeBracketSquare size="36" variation='solid' class=" " />
                        <div>
                            <h3 class="font-bold text-xl md:text-2xl">
                                Sensor Programming
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Professional Servicing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="img hidden md:mt-24 xl:mt-0 md:inline-block x max-w-md md:max-w-3xl rounded-3xl bg-blend-multiply overflow-hidden"
        >
            <img
                class=" object-cover"
                src={i}
                alt=" a delivery guy in front of a van"
            />
        </div>
        <div
            class="img md:hidden mt-12 rounded-3xl bg-blend-multiply overflow-hidden"
        >
            <img
                class=" object-cover"
                src={i}
                alt=" a delivery guy in front of a van"
            />
        </div>
    </div>
</div>

<style>
    .x {
        box-shadow:
            22px -22px #6819fc,
            30px -30px #000000,
            40px -40px #82f067 !important;
    }
</style>
