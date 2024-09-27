<script lang="ts">
    import MapPin from "svelte-heros-v2/MapPin.svelte";
    import CLock from "svelte-heros-v2/Clock.svelte";

    import Envelope from "svelte-heros-v2/Envelope.svelte";
    import Phone from "svelte-heros-v2/Phone.svelte";
    import Mapcomp from "$lib/components/Mapcomp.svelte";
    import Clock from "svelte-heros-v2/Clock.svelte";
    export let data
</script>

<div class=" pt-24 md:pt-48 px-6">
    <div class="header w-full max-w-7xl mx-auto">
        <div class="!mx-auto w-max">
            <div class="flex mx-auto">
                <div
                    class=" md:size-32 size-24 grid place-items-center rounded-full bg-tertiary border-8 border-black"
                >
                    <Envelope class=" md:size-20 size-12" variation="solid" />
                </div>
                <div
                    class="md:size-24 scale-150 size-20 overflow-hidden grid place-items-center rounded-full z-[1] bg-primary border-4 border-black"
                >
                    <Phone class="  size-12" variation="solid" />
                </div>
                <div
                    class=" transform md:size-32 size-24 grid place-items-center rounded-full bg-accent border-8 border-black"
                >
                    <Envelope class=" md:size-20 size-12" variation="solid" />
                </div>
            </div>
        </div>
    </div>
    <div class="mt-12">
        <h1
            class="font-extrabold text-4xl text-pretty md:text-6xl lg:text-7xl text-center max-w-5xl mx-auto"
        >
            How to reach us
        </h1>
        <div
            class="xl:mt-36 mt-12 md:mt-28 md:px-6 w-full max-w-xl xl:max-w-full mx-auto"
        >
            <div
                class="flex flex-col-reverse items-center justify-center xl:flex-row gap-6"
            >
                <div class="w-full xl:w-1/2">
                    <Mapcomp gck={data.apikey}/>
                </div>
                <div
                    class="  h-max shadow-lg border-black mb-12 xl:mb-0 xl:ml-12 w-full max-w-xl xl:w-1/2 bg-white p-6 md:p-8 rounded-3xl space-y-12"
                >
                    <div>
                        <h3 class="font-bold text-2xl md:text-3xl">
                            Address Information
                        </h3>
                        <div class="md:mt-6 mt-3 space-y-3">
                            <p
                                class="text-lg md:text-xl font-medium flex items-center gap-x-2"
                            >
                                <MapPin
                                    size="29"
                                    variation="solid"
                                    class="text-black hidden md:block"
                                />6181 Annapolis Rd, Hyattsville, MD 20784
                            </p>
                            <p
                                class="text-lg md:text-xl font-medium flex items-center gap-x-2"
                            >
                                <Clock
                                    size="29"
                                    variation="solid"
                                    class="text-black "
                                />Open 24/7
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-bold text-2xl md:text-3xl">
                            Contact Information
                        </h3>
                        <div class="md:mt-6 mt-3 space-y-3">
                            <p
                                class="text-lg md:text-xl font-medium flex items-center gap-x-2"
                            >
                                <Phone
                                    size="26"
                                    variation="solid"
                                    class="text-black "
                                />+1(240) 240-1100
                            </p>
                            <p
                                class="text-lg md:text-xl font-medium flex items-center gap-x-2"
                            >
                                <Envelope
                                    size="26"
                                    variation="solid"
                                    class="text-black "
                                />service@dccommander.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
