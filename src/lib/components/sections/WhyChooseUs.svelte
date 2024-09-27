<script lang="ts">
    import AcademicCap from 'svelte-heros-v2/AcademicCap.svelte';
    import Bolt from 'svelte-heros-v2/Bolt.svelte';
    import Clock from 'svelte-heros-v2/Clock.svelte';
</script>

<div class=" w-full px-6 md:px-3">
    <h1 class="font-semibold text-3xl text-pretty md:text-5xl lg:text-6xl text-center">
        Why our services are <span class="text-primary font-bold underline">the best</span>
    </h1>
    <div class="mt-8 md:mt-24 w-full  items-center justify-center   flex flex-wrap gap-6  md:items-start   xl:!max-w-[90rem] mx-auto ">
        
            <div
                class=" box  w-full max-w-md  md:max-w-[45%] xl:max-w-[33.3333%]     h-full flex items-end p-6 md:p-8"
            >
                <div>
                   <div class="rounded-full md:rounded-3xl border-2 md:border-4  border-tertiary-900 w-max p-2 md:p-3 mb-3 md:mb-8 bg-tertiary"> <Bolt variation='solid' class='text-tertiary-900 size-6 md:size-'/></div>
                    <h3 class=" text-2xl md:text-3xl font-bold ">
                        Fast & Reliable
                    </h3>
                    <p class="mt-1 text-lg md:text-xl  opacity-80 text-pretty">
                        Experience the difference with our fast and reliable
                        services. Rely on us to deliver with lightspeed.
                    </p>
                </div>
            </div>
            <!-- <div
                class=" box  w-full max-w-md  md:max-w-[45%] xl:max-w-[33.3333%]     h-full flex items-end p-6 md:p-8"
            >
                <div>
                   <div class="rounded-full md:rounded-3xl border-2 md:border-4  border-secondary-900 w-max p-2 md:p-3 mb-3 md:mb-8 bg-secondary-100"> <AcademicCap variation='solid' class='text-secondary-900 size-6 md:size-'/></div>
                    <h3 class=" text-2xl md:text-3xl font-bold ">
                        Trained personnel
                    </h3>
                    <p class="mt-1 text-lg md:text-xl  opacity-80 text-pretty">
                       You can trust our trained and certified personnel to deliver professional & exceptional service every time.
                    </p>
                </div>
            </div> -->
            <div
                class=" w-full max-w-md  md:max-w-[45%] xl:max-w-[33.3333%] box    h-full flex items-end p-6 md:p-8"
            >
                <div>
                   <div class="rounded-full md:rounded-3xl border-2 md:border-4  border-accent-900 w-max p-2 md:p-3 mb-3 md:mb-8 bg-accent"> <Clock variation='solid' class='text-accent-900 size-6 md:size-'/></div>
                    <h3 class=" text-2xl md:text-3xl font-bold ">
                         Available 24/7
                    </h3>
                    <p class="mt-1 text-lg md:text-xl  opacity-80 text-pretty">
                      Rest assured, our services are available 24/7 for your convenience, ensuring support whenever you need it. 
                    </p>
                </div>
            </div>
       
       
        
    </div>
</div>

<style>
    .box{
       
        @apply bg-white shadow-2xl;
        border-radius: 20px;
        
    }
</style>