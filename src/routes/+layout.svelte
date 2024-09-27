<script>
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/sections/footer.svelte";
import "../app.postcss";
</script>

<div class="bg-zinc-50 text-zinc-950 overflow-x-hidden">
    <Navbar/>
    <div class="pb-24 w-full !overflow-x-hidden">
        <slot></slot>
    </div>
   <div class="overflow-x-hidden w-full">
     <Footer/>
   </div>
</div>

