<template>
<section class="bg-gray-100 text-gray-800 py-16">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid md:grid-cols-4 gap-12">
      <!-- O nás -->
      <div class="flex flex-col items-start">
        <h2 class="text-xl font-semibold text-[var(--color-primary)] mb-4">Kræftforeningen Tidslerne</h2>
        <p class="text-sm leading-relaxed">
          Kræftforeningen Tidslerne er en forening for tidligere og nuværende kræftpatienter samt deres pårørende og i øvrigt enhver, der ønsker at støtte et forum for samspillet mellem konventionelle og alternative behandlinger.
        </p>
        <p class="text-sm mt-4 leading-relaxed">
          Foreningen er finansieret ved tilskud fra fonde, puljemidler samt medlemsbidrag og arv.
        </p>
      </div>

      <!-- Protektor -->
      <div class="flex flex-col items-start">
        <h2 class="text-xl font-semibold text-[var(--color-primary)] mb-4">Protektor</h2>
        <img src="@/images/ghita_noerby.jpg" alt="Ghita Nørby" class="rounded-md w-full max-w-[160px] mb-2" />
        <p class="text-sm font-semibold">GHITA NØRBY</p>
        <p class="text-sm text-gray-600">Kommandør af Dannebrogordenen<br>Skuespiller ved Det Kgl. Teater</p>
      </div>

      <!-- Kontakt -->
      <div class="flex flex-col items-start">
        <h2 class="text-xl font-semibold text-[var(--color-primary)] mb-4">Kontakt os</h2>
        <p class="text-sm leading-relaxed">
          Kræftforeningen Tidslerne<br />
          v/Formand Mai Nielsen<br />
          Ådalsparken 29<br />
          6710 Esbjerg V
        </p>
        <p class="text-sm mt-4 leading-relaxed">
          CVR: 1742 0291<br />
          Tlf: +45 70 20 05 15<br />
          Email: <a href="mailto:sekretariat@tidslerne.dk" class="text-[var(--color-primary)] hover:underline">sekretariat@tidslerne.dk</a>
        </p>
        <p class="text-sm mt-2 leading-relaxed">
          Elektronisk fakturering:<br />
          <a href="mailto:kasserer@tidslerne.dk" class="text-[var(--color-primary)] hover:underline">kasserer@tidslerne.dk</a>
        </p>
      </div>

      <!-- Merchandise box -->
      <div class="flex flex-col items-center md:items-start text-center md:text-left mt-12">
        <img
        src="@/images/Merchandise.jpeg"
        alt="Tidslerne merch"
        class="rounded-md max-w-[160px] w-full mb-4"
        />
          <a
           href="/merch"
           class="block w-full max-w-[160px] bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition text-sm text-center"
           >
           MERCHANDISE<br />KAN KØBES HER
          </a>
        </div>
    </div>
  </div>
</section>


</template>
