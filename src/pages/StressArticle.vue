<script setup>
import LayoutFull from "@/layouts/LayoutFull.vue"
</script>

<template>
   <LayoutFull class="pt-9">
    <div class="breadcrumb col-span-full mb-14">
        <router-link class="hover:text-bv-green transition" to="/"
          >Accueil</router-link
        >
        > <span>Ma tête</span>
        >
        <span class="font-bold">L’activité physique, votre meilleure alliée</span>
      </div>
    <div class="grid grid-cols-12 gap-5">
        <aside class="col-span-4 sticky rounded-lg h-max top-36 mt-5 bg-bv-blue-bg p-5 w-80">
            <nav class="flex flex-col gap-5">
                <h5 class="text-bv-purple">Sommaire de l’article</h5>
                <ul>
                    <li class="mb-3">Activité physique ne rime pas forcément avec sport</li>
                    <li class="mb-3">La meilleure façon de rester en forme</li>
                    <li class="mb-3">Comment maintenir une activité physique régulière ?</li>
                    <li class="mb-3">La meilleure façon de rester en forme</li>
                    <li class="mb-3">La bonne idée</li>
                    <li class="mb-3">Le saviez-vous ?</li>
                </ul>
            </nav>
        </aside>
        <main class="col-span-8">
            <h2 class="mb-8">L’activité physique, votre meilleure alliée</h2>
            <p class="text-xl mb-6">Au moins trente minutes d’activité physique d’endurance cinq jours par semaine au moins, on ne le répétera jamais assez, c’est indispensable pour rester en forme plus longtemps et garder le moral !</p>
            <img class="mb-8" src="@images/stress/sport.webp" alt="">

            <section>
                <article>
                    <h3 class="mb-8">Activité physique ne rime pas forcément avec sport</h3>

                    <p class="mb-6">Tout exercice, qui met votre corps en mouvement et l’amène à dépenser de l’énergie, est à prendre en compte : jardiner, bricoler, monter des escaliers, descendre une station plus tôt dans les transports  en commun, faire les courses à pied ou promener son chien… Alors, multipliez les prétextes pour « bouger » ! D’autant que l’activité physique – surtout quand on s’y adonne le matin – est un excellent moyen pour lutter contre la fatigue. Elle peut également aider à réduire les douleurs au niveau des articulations. </p>
                    <p>Pendant longtemps on parlait de façon globale de l’activité physique, alors que les nouvelles recommandations mettent maintenant l’accent sur la diversité des bénéfices. Il est conseillé de pratiquer au moins 30 minutes d’activités physiques d’endurance au moins 5 jours par semaine, à compléter, deux ou trois fois par semaine, par des activités de renforcement musculaire et de souplesse et, plus particulièrement à partir de 65 ans, d’équilibre.</p>
                </article>
                <article>
                    <h3 class="mb-8">La meilleure façon de rester en forme</h3>

                    <p class="mb-6">Au moins trente minutes d’exercice par jour, associées à une alimentation équilibrée, sont tout indiquées pour améliorer sa condition physique, conserver une bonne tonicité musculaire, de la souplesse et de l’équilibre, mais aussi pour prévenir le diabète ainsi que les maladies cardiovasculaires. Elles permettent de lutter contre l’embonpoint et de limiter les risques de fractures dues à l’ostéoporose, car elles aident à préserver le capital osseux.</p>
                    <iframe class="m-auto" width="560" height="315" src="https://www.youtube.com/embed/MIDGJVJg8BA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </article>
            </section>
        </main>
    </div>
   </LayoutFull>
  
</template>