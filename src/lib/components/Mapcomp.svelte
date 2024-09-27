<script lang="ts">
    import { GoogleMap, GoogleMapMarker } from "@beyonk/svelte-googlemaps";

    export let gck:string
    const lng: number = -76.91134565583596;
    const lat: number= 38.938377654872156;  
    const zoom: number = 17;
   
  

</script>

<div class="relative h-[30rem]">
     <!-- <div class="absolute -top-4 text-xl -right-11 px-8 py-2 bg-gradient-to-tr from-primary via-tertiary z-[1] to-accent font-black rotate-[30deg] rounded-2xl ">Find us Here</div> -->
    <div class="w-full absolute z-[1] bg-gradient-to-tl from-primary via-tertiary to-accent rounded-3xl p-4 h-[30rem]">
       
    <GoogleMap
        apiKey={gck}
        center={{
            lat,
            lng,
        }}
        zoom={17}
    >
        <GoogleMapMarker {lat} {lng} />
    </GoogleMap>
</div>
<!-- <div class="h-full w-full  bg-gradient-to-tr from-primary via-tertiary to-accent rounded-3xl border-8 border-black rotate-6"></div> -->
</div>
