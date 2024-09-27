<script lang="ts">
    import Star from "svelte-heros-v2/Star.svelte";
    import i from "../../lib/images/manager.jpg";
    import il from "../../lib/images/rating.svg";
    import ill from "../../lib/images/team.svg";
    import chat from '../../lib/images/chat.svg'
    import Wrench from "svelte-heros-v2/Wrench.svelte";
    import Truck from "svelte-heros-v2/Truck.svelte";
    import Bolt from "svelte-heros-v2/Bolt.svelte";
</script>

<div class=" pt-24 md:pt-48 px-6">
    <div class="header w-full max-w-7xl mx-auto">
        <div class="!mx-auto w-max">
            <div class="flex mx-auto">
                <div
                    class=" md:size-32 size-24 grid place-items-center rounded-full bg-tertiary border-8 border-black"
                >
                    <Wrench class=" md:size-20 size-12" variation="solid" />
                </div>
                <div
                    class="md:size-24 scale-150 size-20 overflow-hidden grid place-items-center rounded-full z-[1] bg-primary border-4 border-black"
                >
                    <Truck class="  size-12" variation="solid" />
                </div>
                <div
                    class=" transform md:size-32 size-24 grid place-items-center rounded-full bg-accent border-8 border-black" style="transform: rotateY(180deg);"
                >
                    <Wrench class=" md:size-20 size-12" variation="solid" />
                </div>
            </div>
        </div>
    </div>
    <div class="mt-12">
        <h1
            class="font-extrabold text-4xl text-pretty md:text-6xl lg:text-7xl text-center max-w-5xl mx-auto"
        >
           Our Services
        </h1>
        <div class="grid mt-8 max-w-3xl mx-auto place-items-center gap-12">
            <div class=" space-y-16 md:space-y-24">
               
                <div>
                    <div
                        class="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4"
                    >
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                                Full tire servicing
                            </h3>
                            <p class="opacity-80 text-xl">
                                From sales to repairs and replacements, we've
                                got your tire needs covered.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                                PSI Services
                            </h3>
                            <p class="opacity-80 text-xl">
                                Ensuring your tires are always at the optimal
                                pressure for safety and efficiency.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                                Oil Changes
                            </h3>
                            <p class="opacity-80 text-xl">
                                Regular maintenance to keep your engine running
                                smoothly.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                                Brake Servicing
                            </h3>
                            <p class="opacity-80 text-xl">
                                Expert care to ensure your vehicle stops safely
                                every time.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                                Sensor Programming
                            </h3>
                            <p class="opacity-80 text-xl">
                                Modern diagnostics and programming to keep your
                                car's systems in check.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                               Transmission Flow
                            </h3>
                            <p class="opacity-80 text-xl">
                               Expert transmission fluid service at ATUDS.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                              Auto Body Shop
                            </h3>
                            <p class="opacity-80 text-xl">
                               Quality auto body repairs at ATUDS & Sons.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                              Roadside Assistance
                            </h3>
                            <p class="opacity-80 text-xl">
                                Fast, friendly roadside assistance for tire, brake, and oil issues.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                             Gas Delivery
                            </h3>
                            <p class="opacity-80 text-xl">
                                Reliable gas delivery service ensuring your vehicle stays fueled and ready to go.
                            </p>
                        </div>
                        <div
                            class="rounded-3xl w-full max-w-sm bg-white shadow-xl p-6"
                        >
                            <h3 class="font-medium text-2xl md:text-3xl mb-2">
                                Auto Consultation
                            </h3>
                            <p class="opacity-80 text-xl">
                                We provide consultation and diagnosis for your
                                car's systems.
                            </p>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</div>

<div class="mt-32 md:mt-48 px-6">
    <div class="mx-auto w-full max-w-4xl rounded-3xl border-4 border-dashed border-black  flex overflow-hidden !bg-white shadow-xl justify-center items-center ">
<div class="text p-8  flex-grow !w-full">
     <h1
            class="font-bold text-4xl text-pretty  lg:text-5xl  "
        >
            Ready to change that tire without stress?
        </h1>
        <a href="https://wa.link/77on83" class="btn mt-8   btn-primary">get in contact</a>
</div>
<div class="max-w-xs h-full p-8 bg-primary-100 hidden md:block">
    <img src={chat} alt="">
</div>
    </div>
</div>
