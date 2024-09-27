<script lang="ts">
    import Star from "svelte-heros-v2/Star.svelte";
    import User from "svelte-heros-v2/UserCircle.svelte";
</script>

<div class=" w-full px-6">
    <div class="">
        <h1
            class="font-semibold text-pretty text-4xl lg:text-7xl max-w-3xl md:text-6xl mx-auto text-center lg:text-left"
        >
            <span class="opacity-80">
                Our customers trust in us to do</span
            >
            <span class="text-primary font-bold !opacity-100"
                >amazing jobs</span
            >
        </h1>

        <div class="mt-12 md:mt-24  justify-center !mx-auto w-full flex flex-wrap gap-6 items-center ">
            <div class="rounded-3xl shadow-2xl max-w-lg bg-white p-8">
                <div class="w-full flex gap-x-3 items-center">
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                </div>
                <h3 class="font-bold text-2xl md:text-3xl  mt-6">
                    They are the best car service company around here, 100%
                    trustworthy
                </h3>
                <div class=" mt-6 md:mt-12 w-full flex items-center md:justify-end">
                    <div class="flex gap-x-2 items-center">
                        <div
                            class="rounded-full bg-primary-100 text-primary p-1.5 grid place-items-center size-12"
                        >
                            <span class="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                                <User variation="solid" size="34" /></span
                            >
                        </div>
                        <p class="mt-1 text-xl font-medium opacity-80">
                            Customer review
                        </p>
                    </div>
                </div>
            </div>
            <div class="rounded-3xl shadow-2xl max-w-lg bg-white p-8">
                <div class="w-full flex gap-x-3 items-center">
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                </div>
                <h3 class="font-bold text-2xl md:text-3xl  mt-6">
                    DC COMMANDER MOBILE TIRE SHOP & AUTO SERVICES provided great services when I needed an oil change and now I'm in love
                </h3>
                <div class=" mt-6 md:mt-12 w-full flex items-center md:justify-end">
                    <div class="flex gap-x-2 items-center">
                        <div
                            class="rounded-full bg-primary-100 text-primary p-1.5 grid place-items-center size-12"
                        >
                            <span class="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                                <User variation="solid" size="34" /></span
                            >
                        </div>
                        <p class="mt-1 text-xl font-medium opacity-80">
                            Customer review
                        </p>
                    </div>
                </div>
            </div>
            <div class="rounded-3xl shadow-2xl max-w-lg bg-white p-8">
                <div class="w-full flex gap-x-3 items-center">
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                    <Star variation="solid" size="24" class="text-primary " />
                </div>
                <h3 class="font-bold text-2xl md:text-3xl  mt-6">
                    I am happy I found these guys when I did, great personnel & good work!
                </h3>
                <div class=" mt-6 md:mt-12 w-full flex items-center md:justify-end">
                    <div class="flex gap-x-2 items-center">
                        <div
                            class="rounded-full bg-primary-100 text-primary p-1.5 grid place-items-center size-12"
                        >
                            <span class="text-2xl md:text-3xl  font-extrabold">
                                <User variation="solid" size="34" /></span
                            >
                        </div>
                        <p class="mt-1 text-xl font-medium opacity-80">
                            Customer review
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
