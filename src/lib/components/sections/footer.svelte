<script lang=ts>
    import Wave from "../wave.svelte";
import Phone from 'svelte-heros-v2/Phone.svelte'
    import Envelope from "svelte-heros-v2/Envelope.svelte";
     
</script>

<Wave/>
<div class=" p-6 md:px-12 xl:pt-0  bg-black">
    <div class="logo  ">
      <p class='text-accent font-head text-3xl md:text-5xl font-extrabold'>  DC COMMANDER</p>
      <p class="text-gray-100 opacity-85 text-lg md:text-xl">Mobile Tire Shop</p>

        </div>
       <div class="mt-12 flex flex-col gap-12 lg:flex-row justify-between">
         <div class="">
            <h3 class="font-bold text-gray-100 text-xl">Useful Links</h3>
            <ul class="flex mt-2 flex-col gap-y-1.5 ">
               <li>
                 <a href="/" class="font-medium opacity-90 text-gray-200 hover:text-primary md:text-lg">Home</a>
               </li>
               <li>
                 <a href="/about" class="font-medium opacity-90 text-gray-200 hover:text-primary md:text-lg">About Us</a>
               </li>
               <li>
                 <a href="/services" class="font-medium opacity-90 text-gray-200 hover:text-primary md:text-lg">Our Services</a>
               </li>
            </ul>
        </div>
        <div class="contact space-y-6">
            <div class="flex gap-4 items-center text-gray-100">
                <div class="p-2 rounded-2xl bg-gray-100 text-black"><Phone size='24' variation='solid'/></div> <h3 class="font-extrabold text-2xl md:text-3xl">+1(240) 240-1100</h3>
            </div>
            <div class="flex gap-4 items-center text-gray-100">
                <div class="p-2 rounded-2xl bg-gray-100 text-black"><Envelope size='24' variation='solid'/></div> <h3 class="font-extrabold text-2xl md:text-3xl">service@atuds.com</h3>
            </div>
        </div>
       </div>
    
</div>