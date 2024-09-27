<script lang="ts">
    import Bolt from "svelte-heros-v2/Bolt.svelte";
    import Star from "svelte-heros-v2/Star.svelte";
    import chat from '../../lib/images/chat.svg';
    import i from "../../lib/images/manager.jpg";
    import il from "../../lib/images/rating.svg";
    import ill from "../../lib/images/team.svg";
</script>

<div class=" pt-24 md:pt-48 px-6">
    <div class="header w-full max-w-7xl mx-auto">
        <div class="!mx-auto w-max">
            <div class="flex mx-auto">
                <div
                    class=" md:size-32 size-24 grid place-items-center rounded-full bg-tertiary border-8 border-black"
                >
                    <Star class=" md:size-20 size-12" variation="solid" />
                </div>
                <div
                    class="md:size-24 scale-150 size-20 overflow-hidden grid place-items-center rounded-full z-[1] bg-primary border-4 border-black"
                >
                    <img src={i} alt="" />
                </div>
                <div
                    class=" transform md:size-32 size-24 grid place-items-center rounded-full bg-accent border-8 border-black"
                >
                    <Star class=" md:size-20 size-12" variation="solid" />
                </div>
            </div>
        </div>
    </div>
    <div class="mt-12">
        <h1
            class="font-extrabold text-4xl text-pretty md:text-6xl lg:text-7xl text-center max-w-5xl mx-auto"
        >
            Your trusted tire and auto services shop.
        </h1>
        <div class="grid mt-8 max-w-7xl mx-auto place-items-center gap-12">
            <div class=" space-y-16 md:space-y-24">
                <p
                    class=" text-center !leading-8 text-xl md:text-2xl opacity-80 text-pretty"
                >
                    Located on Annapolis Road in Hyattsville, MD, DC COMMANDER MOBILE TIRE SHOP & AUTO SERVICES
                    is dedicated to providing top-notch car services to our
                    community. Our mission is clear: to offer the best car
                    services to our customers with a focus on professionalism,
                    promptness, and affordability.
                </p>
                
                <div class="mt-12">
                   <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                     <div class="w-full max-w-sm">
                        <img src={il} alt="" />
                    </div>
                    <div>
                        <h3 class="font-bold text-3xl lg:text-left md:text-4xl mb-6 text-center">
                        <span class="text-primary">Exceptional</span> Customer Experience
                    </h3>
                    <p
                        class=" text-center lg:text-left !leading-8 text-xl md:text-2xl opacity-80 text-pretty"
                    >
                        At DC COMMANDER MOBILE TIRE SHOP & AUTO SERVICES , we take the time to listen to our
                        customers. We believe in transparent communication,
                        explaining the <b>"why"</b> and <b>"how"</b> of every repair
                        and service. This approach not only builds trust but also
                        ensures that our customers are well-informed about their
                        vehicle's condition and the necessary work.
                    </p>
                    </div>
                   </div>
                </div>
                <div class=" max-w-3xl mx-auto">
                    <div class="mb-6 mx-auto max-w-xs">
                        <img src={ill} alt="" />
                    </div>
                    <h3 class="font-bold text-3xl md:text-4xl mb-6 text-center">
                        Our Mission and Values
                    </h3>
                    <p
                        class=" text-center !leading-8 text-xl md:text-2xl opacity-80 text-pretty"
                    >
                        Our primary goal is to provide the best car services to
                        our customers. We stand by the following values:
                    </p>
                    <div
                        class="flex flex-wrap gap-10 lg:gap-12 mx-auto mt-12 w-full items-center justify-center"
                    >
                        <div
                            class=" p-6 rounded-3xl shadow-xl flex flex-col gap-y-3 w-max max-w-xs bg-white"
                        >
                            <Star
                                size="36"
                                variation="solid"
                                class=" text-primary "
                            />
                            <div>
                                <h3 class="font-bold text-xl md:text-2xl mb-2">
                                    Professionalism
                                </h3>
                                <p class=" text-lg xl:text-xl opacity-80">
                                    Our team is committed to delivering
                                    high-quality service with a professional
                                    attitude.
                                </p>
                            </div>
                        </div>
                        <div
                            class=" p-6 rounded-3xl shadow-xl flex flex-col gap-y-3 w-max max-w-xs bg-white"
                        >
                            <Bolt
                                size="36"
                                variation="solid"
                                class=" text-primary "
                            />
                            <div>
                                <h3 class="font-bold text-xl md:text-2xl mb-2">
                                    Fast & Efficient Work
                                </h3>
                                <p class=" text-lg xl:text-xl opacity-80">
                                    We understand the importance of your time
                                    and strive to finish all tasks quickly.
                                </p>
                            </div>
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
        <a href="https://wa.link/x0qvmp" class="btn mt-8   btn-primary">get in contact</a>
</div>
<div class="max-w-xs h-full p-8 bg-primary-100 hidden md:block">
    <img src={chat} alt="">
</div>
    </div>
</div>
