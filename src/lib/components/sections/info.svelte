<script lang="ts">
    import Star from "svelte-heros-v2/Star.svelte";
    import FaceSmile from "svelte-heros-v2/FaceSmile.svelte";
    import CheckBadge from "svelte-heros-v2/CheckBadge.svelte";
    import i from "../../images/tires2.png";
</script>

<div class=" relative">
  
    <div
        class=" py-12 px-3 md:p-24 bg grid place-items-center h-max w-full z-[10]  "
    >
        <div
            class="rounded-3xl hidden md:flex glass x border-2 border-white p-6 md:p-12 w-full max-w-7xl flex-col-reverse xl:flex-row gap-12 items-center justify-center"
        >
            <div>
                <span
                    class=" text-white  md:text-2xl opacity-80"
                    >Premium Works</span
                >
                <h3
                    class="font-extrabold text-pretty text-4xl md:text-6xl xl:text-7xl text-zinc-50"
                >
                    We  provide the best of car & tire servicing
                </h3>

                <div class="flex gap-3 flex-wrap mt-8">
                    <div
                        class="bg-black p-4 rounded-2xl text-zinc-50 flex gap-x-3 w-full sm:w-max"
                    >
                        <Star
                            variation="solid"
                            size="36"
                            class="text-accent "
                        />
                        <div>
                            <h3
                                class="font-extrabold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                            >
                                20+
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Cars Serviced
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-black p-4 rounded-2xl text-zinc-50 flex gap-x-3 w-full sm:w-max"
                    >
                        <FaceSmile
                            variation="solid"
                            size="36"
                            class="text-accent "
                        />
                        <div>
                            <h3
                                class="font-extrabold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                            >
                                50+
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-black p-4 rounded-2xl text-zinc-50 flex gap-x-3 w-full sm:w-max"
                    >
                        <CheckBadge
                            variation="solid"
                            size="36"
                            class="text-accent "
                        />
                        <div>
                            <h3
                                class="font-extrabold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                            >
                                20+
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Jobs completed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={i}
                alt=""
                class=" xl:transform   hidden xl:block"
            />
        </div>
        <div
            class="rounded-3xl md:hidden glass border-2 border-white p-5 md:p-12 w-full max-w-7xl flex flex-col-reverse xl:flex-row gap-12 items-center justify-center"
        >
            <div>
                <span
                    class=" text-white  text-base opacity-80"
                   >Premium Works</span
                >
                <h3
                    class="font-extrabold text-pretty text-4xl md:text-6xl xl:text-7xl text-zinc-50"
                >
                                        We  provide the best of car & tire servicing

                </h3>
                <div class="flex gap-3 flex-wrap mt-8">
                    <div
                        class="bg-black p-4 rounded-2xl text-zinc-50 flex gap-x-3 w-full sm:w-max"
                    >
                        <Star
                            variation="solid"
                            size="36"
                            class="text-accent "
                        />
                        <div>
                            <h3
                                class="font-extrabold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                            >
                                20+
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Cars Serviced
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-black p-4 rounded-2xl text-zinc-50 flex gap-x-3 w-full sm:w-max"
                    >
                        <FaceSmile
                            variation="solid"
                            size="36"
                            class="text-accent "
                        />
                        <div>
                            <h3
                                class="font-extrabold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                            >
                                50+
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Happy Customers
                            </p>
                        </div>
                    </div>
                    <div
                        class="bg-black p-4 rounded-2xl text-zinc-50 flex gap-x-3 w-full sm:w-max"
                    >
                        <CheckBadge
                            variation="solid"
                            size="36"
                            class="text-accent "
                        />
                        <div>
                            <h3
                                class="font-extrabold text-xl md:text-2xl xl:text-3xl text-zinc-50"
                            >
                                20+
                            </h3>
                            <p class=" text-lg xl:text-xl opacity-80">
                                Jobs completed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={i}
                alt=""
                class=" xl:transform xl:-translate-y-36 xl:translate-x-36 xl:scale-[1.3] hidden xl:block"
            />
        </div>
    </div>
</div>

<style>
    .bg {
        background: url("../../images/blob2.svg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .x {
        box-shadow:
            -22px 22px #2c2c2c,
            -30px 30px #6d6d6d,
            -40px 40px #a3a3a3;
    }
    .title {
        letter-spacing: 5px;
    }
</style>
