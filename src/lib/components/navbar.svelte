<script lang="ts">
    import { page } from "$app/stores";
    import anime from "animejs";
    import Menu from "svelte-heros-v2/Bars3.svelte";
    import X from "svelte-heros-v2/XMark.svelte";
    import { fade } from "svelte/transition";
    $: currentPath = $page.url.pathname
    let menuIsActive = false;
    function showMenu() {
       
        anime({
            targets: ".menu",
            height:'17rem',
            opacity:{
                value:1,
                delay:50,
                duration:2,
                easing:'linear'
            },
            easing: "easeOutSine",
            duration: 500,
        });
         menuIsActive = true;
    }
    function closeMenu() {
        menuIsActive = false;
        anime({
            targets: ".menu",
            height:{
                value:0,
                delay:500,
                duration:6,
                easing:'linear'
            },
            
            opacity:'0',
            easing: "easeOutSine",
            duration: 140,
        });
    }
</script>
<div class=" w-full py-10  -top-[500px] md:!top-0  justify-center  fixed z-10 hidden md:!flex ">
    <div
    class="w-[95%] max-w-4xl  p-3 px-10 rounded-full  bg-white flex flex-col md:flex-row items-center justify-between gap-x-6 gap-y-2 md:gap-y-0 transform  border border-gray-100"
>
    <div class="start pt-12 md:pt-0">
        <div class="logo hidden md:block font-head text-2xl font-extrabold">
            <span class="text-primary">DC </span>COMMANDER
        </div>
    </div>
    <div class="center flex-grow">
        <nav>
            <ul
                class=" hidden md:!flex  gap-y-6 md:gap-y-0 gap-x-4 xl:gap-x-8 items-center justify-center text-lg"
            >
                <a
                    href="/"
                    class=" transition-colors duration-150 hover:text-primary font-semibold capitalize"
                    class:text-primary={currentPath === '/'}
                >
                    <li>Home</li>
                </a>
                <a
                    href="/about"
                    class="transition-colors duration-150 hover:text-primary font-semibold capitalize"
                     class:text-primary={currentPath === '/about'}
                >
                    <li>About </li>
                </a>
                <a
                    href="/services"
                    class="transition-colors duration-150 hover:text-primary font-semibold capitalize"
                     class:text-primary={currentPath === '/services'}
                >
                    <li>Our services</li>
                </a>
            </ul>
        </nav>
    </div>
    <div class="end ">
        <a href="/contact" class="btn btn-primary btn-sm !rounded-full py-1">Contact us</a>
    </div>
</div>
</div>

<div class="mx-auto w-[90%] flex justify-center md:hidden">
    <div
    class="w-[90%] mx-auto p-6 pt-14 rounded-2xl bg-white flex md:hidden flex-col md:flex-row items-center justify-between gap-x-3 gap-y-2 md:gap-y-0 transform translate-y-[20px] h-[0rem] overflow-hidden opacity-0 fixed
      z-10 menu "
>
   
    <div class="center flex-grow">
        <nav>
            <ul
                class="flex-col flex md:flex-row gap-y-3 md:gap-y-0 gap-x-12 items-center justify-center text-lg" 
            >
                <a on:click={closeMenu}
                    href="/"
                    class="transition-colors duration-150 hover:text-primary font-semibold capitalize"
                     class:text-primary={currentPath === '/'}
                >
                    <li>Home</li>
                </a>
                <a on:click={closeMenu}
                    href="/about"
                    class="transition-colors duration-150 hover:text-primary font-semibold capitalize"
                     class:text-primary={currentPath === '/about'}
                >
                    <li>About </li>
                </a>
                <a on:click={closeMenu}
                    href="/services"
                    class="transition-colors duration-150 hover:text-primary font-semibold capitalize"
                     class:text-primary={currentPath === '/services'}
                >
                    <li>Our services</li>
                </a>
                <a on:click={closeMenu}
                    href="/contact"
                    class="transition-colors duration-150 hover:text-primary font-semibold capitalize"
                     class:text-primary={currentPath === '/contact'}
                >
                    <li>Contact Us</li>
                </a>
            </ul>
        </nav>
    </div>
    <div class="end hidden md:block">
        <button class="btn btn-secondary btn-outline">Contact us</button>
    </div>
</div>

<div class="w-[90%] mx-auto py-3 flex justify-center  z-10  m-0 fixed top-0 left-0 right-0">
    <div
    class="w-full px-6 py-1 !rounded-full bg-white flex items-center justify-between gap-x-3 "
>
    <div class="logo text-xl md:text-2xl font-extrabold">
        <span class="text-primary">DC </span> COMMANDER
    </div>
    {#if menuIsActive}
        <button in:fade class="btn !border-none ml-auto btn-ghost btn-icon" on:click={closeMenu}
            ><X size='18' /></button
        >
    {:else}
        <button in:fade class="btn !border-none btn-ghost btn-icon" on:click={showMenu}>
            <Menu size='18'/>
        </button>
    {/if}
</div>
</div>
</div>
