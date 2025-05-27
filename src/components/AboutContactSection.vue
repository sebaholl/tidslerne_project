<template>
  <section class="bg-gray-100 text-gray-800 py-16">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid md:grid-cols-4 gap-12">
        <!-- About Us -->
        <div class="flex flex-col items-start">
          <h2 class="text-xl font-semibold text-[var(--color-primary)] mb-4">Tidslerne Cancer Association</h2>
          <p class="text-sm leading-relaxed">
            Tidslerne is an association for current and former cancer patients, their relatives, and anyone who wishes to support a forum combining conventional and alternative treatments.
          </p>
          <p class="text-sm mt-4 leading-relaxed">
            The association is funded through grants from foundations, public funds, membership fees, and donations.
          </p>
        </div>

        <!-- Patron -->
        <div class="flex flex-col items-start">
          <h2 class="text-xl font-semibold text-[var(--color-primary)] mb-4">Patron</h2>
          <img src="@/images/ghita_noerby.jpg" alt="Ghita Nørby" class="rounded-md w-full max-w-[160px] mb-2" />
          <p class="text-sm font-semibold">GHITA NØRBY</p>
          <p class="text-sm text-gray-600">Commander of the Order of the Dannebrog<br>Actress at the Royal Danish Theatre</p>
        </div>

        <!-- Contact -->
        <div class="flex flex-col items-start">
          <h2 class="text-xl font-semibold text-[var(--color-primary)] mb-4">Contact Us</h2>
          <p class="text-sm leading-relaxed">
            Tidslerne Cancer Association<br />
            Attn: Chairwoman Mai Nielsen<br />
            Ådalsparken 29<br />
            6710 Esbjerg V
          </p>
          <p class="text-sm mt-4 leading-relaxed">
            CVR: 1742 0291<br />
            Phone: +45 70 20 05 15<br />
            Email: <a href="mailto:sekretariat@tidslerne.dk" class="text-[var(--color-primary)] hover:underline">sekretariat@tidslerne.dk</a>
          </p>
          <p class="text-sm mt-2 leading-relaxed">
            Electronic invoicing:<br />
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
             MERCHANDISE<br />AVAILABLE HERE
            </a>
          </div>
      </div>
    </div>
  </section>
  </template>
