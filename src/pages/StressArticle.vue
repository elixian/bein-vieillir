<script setup>
import LayoutFull from "@/layouts/LayoutFull.vue";
import FollowArrow from "@/components/ui/FollowArrow.vue";
import CardShadow from "@/components/CardShadow.vue";
</script>

<template>
  <LayoutFull class="pt-9">
    <div class="breadcrumb col-span-full mb-14">
      <router-link class="hover:text-bv-green transition" to="/"
        >Accueil</router-link
      >
      > <span>Ma tête</span>
      >
      <span  class="font-bold">L’activité physique, votre meilleure alliée</span>
    </div>
    <div class="grid grid-cols-12 gap-5">
      <aside
        class="col-span-4 sticky rounded-lg h-max top-36 mt-5 bg-bv-blue-bg p-5 w-72"
      >
        <nav class="flex flex-col gap-5">
          <h5  class="text-bv-purple">Sommaire de l’article</h5>
          <ul>
            <li class="mb-3">
              <a href="#link-1">Activité physique ne rime pas forcément avec sport</a>
            </li>
            <li class="mb-3"><a href="#link-2">La meilleure façon de rester en forme</a></li>
            <li class="mb-3">
              <a href="#link-3">Comment maintenir une activité physique régulière ?</a>
            </li>
            <li class="mb-3"><a href="#link-4" >La meilleure façon de rester en forme</a></li>
            <li class="mb-3"><a href="#link-5">La bonne idée</a></li>
            <li class="mb-3"><a href="#link-6">Le saviez-vous ?</a></li>
          </ul>
        </nav>
      </aside>
      <main class="col-span-8">
        <h2 id="link-1" class="mb-8">L’activité physique, votre meilleure alliée</h2>
        <p class="text-xl mb-6">
          Au moins trente minutes d’activité physique d’endurance cinq jours par
          semaine au moins, on ne le répétera jamais assez, c’est indispensable
          pour rester en forme plus longtemps et garder le moral !
        </p>
        <img class="mb-8" src="@images/stress/sport.webp" alt="" />

        <section>
          <article>
            <h3 class="mb-8">
              Activité physique ne rime pas forcément avec sport
            </h3>

            <p class="mb-6">
              Tout exercice, qui met votre corps en mouvement et l’amène à
              dépenser de l’énergie, est à prendre en compte : jardiner,
              bricoler, monter des escaliers, descendre une station plus tôt
              dans les transports en commun, faire les courses à pied ou
              promener son chien… Alors, multipliez les prétextes pour « bouger
              » ! D’autant que l’activité physique – surtout quand on s’y adonne
              le matin – est un excellent moyen pour lutter contre la fatigue.
              Elle peut également aider à réduire les douleurs au niveau des
              articulations.
            </p>
            <p>
              Pendant longtemps on parlait de façon globale de l’activité
              physique, alors que les nouvelles recommandations mettent
              maintenant l’accent sur la diversité des bénéfices. Il est
              conseillé de pratiquer au moins 30 minutes d’activités physiques
              d’endurance au moins 5 jours par semaine, à compléter, deux ou
              trois fois par semaine, par des activités de renforcement
              musculaire et de souplesse et, plus particulièrement à partir de
              65 ans, d’équilibre.
            </p>
          </article>
          <article id="link-2" class="mt-8"  >
            <h3 >La meilleure façon de rester en forme</h3>

            <p class="mt-5">
              Au moins trente minutes d’exercice par jour, associées à une
              alimentation équilibrée, sont tout indiquées pour améliorer sa
              condition physique, conserver une bonne tonicité musculaire, de la
              souplesse et de l’équilibre, mais aussi pour prévenir le diabète
              ainsi que les maladies cardiovasculaires. Elles permettent de
              lutter contre l’embonpoint et de limiter les risques de fractures
              dues à l’ostéoporose, car elles aident à préserver le capital
              osseux.
            </p>
            <iframe
              class="m-auto mt-5"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MIDGJVJg8BA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </article>
          <article class="mt-8">
            <h4 >Un titre dans l'ombre Uxienne</h4>
            <p class="mt-5">
              Au moins trente minutes d’exercice par jour, associées à une
              alimentation équilibrée, sont tout indiquées pour améliorer sa
              condition physique, conserver une bonne tonicité musculaire, de la
              souplesse et de l’équilibre, mais aussi pour prévenir le diabète
              ainsi que les maladies cardiovasculaires. Elles permettent de
              lutter contre l’embonpoint et de limiter les risques de fractures
              dues à l’ostéoporose, car elles aident à préserver le capital
              osseux.
            </p>
            <p class="mb-6">
              Dans ce contenu, on retrouve également des listes à puce :
            </p>
            <ol>
              <li>Ici le bullet point 1</li>
              <li>
                Ici le bullet point 2 :
                <ol>
                  <li>premier sous level</li>
                  <li>second sous level</li>
                </ol>
              </li>
              <li>Et le dernier</li>
            </ol>
          </article>

          <p class="font-bold text-xl pt-8">
            Le site de l’Assurance retraite propose un service pour vous
            permettre d’accéder à cette demande :
          </p>

          <a
            href="https://www.lassuranceretraite.fr"
            class="flex bg-bv-blue-bg p-5 gap-4 items-center w-max rounded-lg mt-6"
          >
            <img src="@images/canv-logo.png" alt="" />
            <div>
              <h5>Estimer le montant de ma retraite</h5>
              <p class="underline">Accéder au service sur lassurance.fr</p>
            </div>
            <followArrow class="self-end" />
          </a>

          <article id="link-3" class="mt-8">
            <h4 >
              Comment maintenir une activité physique régulière ?
            </h4>
            <p class="mt-5 ">
              La vie quotidienne nous offre bien des occasions de faire de
              l’exercice, autant les saisir ! Vous pouvez ainsi vous fixer des
              objectifs, que vous jugez réalisables, et les tenir à votre propre
              rythme sans trop forcer. C’est excellent pour le moral. Et pour
              vous motiver davantage et sur la durée, vous pouvez planifier des
              activités avec des amis, par exemple, une ou deux séances
              d’aquagym qui vous permettront de vous muscler en douceur (le
              corps étant porté par l’eau), sans jamais ressentir la moindre
              courbature. Et, plus que l’intensité de l’effort, c’est la
              régularité qui est bénéfique. Mieux vaut « bouger » 10 à 30
              minutes tous les jours que 3 heures une fois par semaine. Cette
              régularité est également à rechercher si vous pratiquez un sport
              qui se distingue de l’activité physique par un effort plus
              soutenu.
            </p>
            <p class="mt-5">
              Pour une activité régulière, n’hésitez pas à pratiquer en groupe.
              Vous pouvez déjà en parler autour de vous, convaincre votre
              entourage et créer un groupe. Vous pouvez aussi partager votre
              expérience sur votre réseau social, ou encore participer à des
              actions comme le programme D-marche, initié par l’association Adal
              (À la Découverte de l’Âge Libre) qui organise des challenges
              collectifs pour inciter les personnes de tout âge à marcher
              davantage et… ensemble ! Pour en savoir plus, découvrez le
              programme D-marche.
            </p>
            <p class="mt-5">
              Quelques précisions importantes sur le programme :
            </p>

            <table>
              <tr>
                <th></th>
                <th>Type de la séance</th>
                <th>Tarification</th>
                <th>Localisation</th>
                <th>Prestataire</th>
              </tr>
              <tr>
                <th>Lundi</th>
                <td>Technique de mémorisation</td>
                <td>Gratuit sur inscription</td>
                <td>Paris</td>
                <td>Mr GUILLAUME</td>
              </tr>
              <tr>
                <th>Mardi</th>
                <td>Penser à son bien-être</td>
                <td>Gratuit sur inscription</td>
                <td>Lyon</td>
                <td>Mr GUILLAUME</td>
              </tr>
              <tr>
                <th>Mercredi</th>
                <td>Conférence sur l’alimentation</td>
                <td>Gratuit sur inscription</td>
                <td>Paris</td>
                <td>Mr GUILLAUME</td>
              </tr>
              <tr>
                <th>Jeudi</th>
                <td>Technique de mémorisation</td>
                <td>Gratuit sur inscription</td>
                <td>Paris</td>
                <td>Mr GUILLAUME</td>
              </tr>
            </table>
          </article>
          <article id="link-5" class="mt-8">
            <h4 >La bonne idée</h4>
            <p class="mt-5">
              Intégrer un club permet de profiter de conseils personnalisés
              d’animateurs formés au sport senior. Les choix sont nombreux :
              allant de séances multisports à des activités comme le fit’ball,
              le cardio training, le step, la danse country, le tai chi, sans
              oublier les cours thématiques comme Gymmémoire, l’Equilibre où en
              êtes-vous ? Sur le site de la FFEPGV par exemple vous trouvez tous
              les détails ainsi qu’une carte de France pour identifier les clubs
              dans votre région.
            </p>
          </article>

          <article id="link-6" class="mt-8">
            <div class="bg-bv-beige p-6 border border-bv-green rounded-lg">
              <h4>Le saviez vous ?</h4>
              <p class="mt-5">
                Les bénéfices de l’activité physique sont de 4 sortes :
                l’endurance, le renforcement musculaire, la souplesse et
                l’équilibre. Pour découvrir les différentes activités et la
                fréquence à laquelle les pratiquer, suivez ce lien. Et vous
                apprendrez que l’activité physique est bonne pour la tête
                également !
              </p>
            </div>
          </article>

          <article class="mt-8">
            <h4>Pour aller plus loin</h4>
            <p class="mt-5">
              Si vous désirez creuser ce sujet nous vous proposons ce support en
              format pdf téléchargeable via le lien ci-dessous :
            </p>
            <a
              class="flex gap-3 p-2 pl-3 pr-3 mt-4 border border-bv-purple rounded-lg w-max"
              href="/static/Programme-sport.pdf"
              download
            >
              <img
                src="@images/icones/download.svg"
                alt="telechargement icone"
              />
              Programme de sport - Bien vieillir [PDF - 2 Mo]
            </a>
          </article>
          <article class="mt-8">
            <div
              class="bg-bv-blue-bg rounded-lg p-4 pt-6 pb-6 flex flex-col gap-5"
            >
              <h3 class="text-bv-green">Lien utiles</h3>
              <div class="flex p-4 pt-5 pb-5 gap-5 bg-white rounded-lg">
                <img src="@images/logo-federation-natio-sport.png" alt="" />
                <div>
                  <h5 class="underline mb-2">Sport en milieu rural</h5>
                  <p>
                    La FNSMR a pour but de favoriser la pratique d’activités
                    sportives adaptées aux spécificités de milieu rural.
                  </p>
                </div>
                <img
                  class="w-4"
                  src="@images/icones/chevron-right.svg"
                  alt=""
                />
              </div>
              <div class="flex p-4 pt-5 pb-5 gap-5 bg-white rounded-lg">
                <img src="@images/logo-federation-natio-sport.png" alt="" />
                <div>
                  <h5 class="underline mb-2">Sport en milieu rural</h5>
                  <p>
                    La FNSMR a pour but de favoriser la pratique d’activités
                    sportives adaptées aux spécificités de milieu rural.
                  </p>
                </div>
                <img
                  class="w-4"
                  src="@images/icones/chevron-right.svg"
                  alt=""
                />
              </div>
              <div class="flex p-4 pt-5 pb-5 gap-5 bg-white rounded-lg">
                <img src="@images/logo-federation-natio-sport.png" alt="" />
                <div>
                  <h5 class="underline mb-2">Sport en milieu rural</h5>
                  <p>
                    La FNSMR a pour but de favoriser la pratique d’activités
                    sportives adaptées aux spécificités de milieu rural.
                  </p>
                </div>
                <img
                  class="w-4"
                  src="@images/icones/chevron-right.svg"
                  alt=""
                />
              </div>
            </div>
          </article>
          <article class="mt-8">
            <h3>C’est le moment de tester vos connaissances !</h3>
            <div
              class="flex mt-6 rounded-lg shadow-lg h-[228px] bg-blue-200 p-8 overflow-hidden cursor-pointer"
            >
              <div class="flex-shrink-0">
                <img class="h-full" src="@images/computer.svg" alt="" />
              </div>

              <div class="pl-5 flex gap-4 flex-col">
                <div
                  class="flex w-fit p-2 pl-3 pr-3 bg-blue-600 rounded-[40px] text-white"
                >
                  Quizz
                </div>
                <h4>Testez vos conaissances en matière de gestion du stress</h4>
                <div
                  class="flex gap-2 align-middle p-5 pt-3 pb-3 rounded-md bg-white w-max"
                >
                  <img
                    class="w-[13px] -rotate-90"
                    src="@/assets/images/icones/triangle.svg"
                    alt=""
                  />
                  Relever le défi
                </div>
              </div>
            </div>
          </article>
        </section>
        <div class="flex gap-5 mt-8">
          
          <a class="flex basis-52 w-min ml-auto gap-5 p-2 text-bv-purple rounded-lg border border-bv-purple  " href="#"><img src="@images/icones/share-link.svg" alt=""><span class="flex-shrink" >Partager cet article</span></a>
          <a class="flex basis-52 gap-5 p-2 text-bv-purple rounded-lg border border-bv-purple w-max " href="#"><img src="@images/icones/printer.svg" alt=""><span >Imprimer cet article</span></a>

        </div>
      </main>
    </div>
    <article class="grid grid-cols-12 gap-5 pt-24 pb-20">
      <h2 class="col-span-full border-l-8 pl-2 border-bv-green">Les dernières actualités sur le sujet</h2>

      <CardShadow class="col-span-3">
        <template v-slot:image>
          <img
            class="rounded-t-md w-full"
            src="@/assets/images/stress/connex-1.webp"
            alt=""
          />
        </template>

        <template v-slot:badge>Témoignage</template>
        <template v-slot:title>Sport en milieu rural</template>
      </CardShadow>
      <CardShadow class="col-span-3">
        <template v-slot:image>
          <img
            class="rounded-t-md w-full"
            src="@/assets/images/stress/connex-2.webp"
            alt=""
          />
        </template>

        <template v-slot:badge>Témoignage</template>
        <template v-slot:title>Combattre la solitude</template>
      </CardShadow>
      <CardShadow class="col-span-3">
        <template v-slot:image>
          <img
            class="rounded-t-md w-full"
            src="@/assets/images/stress/connex-3.webp"
            alt=""
          />
        </template>

        <template v-slot:badge>Témoignage</template>
        <template v-slot:title>Se consacrer à une association</template>
      </CardShadow>
      <CardShadow class="col-span-3">
        <template v-slot:image>
          <img
            class="rounded-t-md w-full"
            src="@/assets/images/stress/connex-4.webp"
            alt=""
          />
        </template>

        <template v-slot:badge>Témoignage</template>
        <template v-slot:title>Témoignage de Xavier</template>
      </CardShadow>
    </article>
  </LayoutFull>
  <div class=" bg-bv-blue-bg pt-10 pb-10 ">
    <LayoutFull >
      <h2 class="border-l-8 pl-2 border-bv-green">Suggestions d’autres contenus</h2>
      <div class="grid grid-cols-12 gap-5 mt-8 ">
        <CardShadow class="col-span-3 rounded-lg shadow-lg">
         
          <template v-slot:badge>Bien-être</template>
          <template v-slot:title>Sport en milieu rural</template>
        </CardShadow>
        <CardShadow class="col-span-3 rounded-lg shadow-lg">
         
          <template v-slot:badge>Actualité</template>
          <template v-slot:title>Se consacrer à une association</template>
        </CardShadow>
        <CardShadow class="col-span-3 rounded-lg shadow-lg">
         
          <template v-slot:badge>Actualité</template>
          <template v-slot:title>Témoignage de Xavier</template>
        </CardShadow>
        <CardShadow class="col-span-3 rounded-lg shadow-lg">
         
          <template v-slot:badge>Actualité</template>
          <template v-slot:title>Covid-19 </template>
        </CardShadow>
        
      </div>
    </LayoutFull>
  </div>
</template>

<style lang="scss" scoped>
table {
  tr td,
  th {
    border: 1px solid black;
    padding: 10px;
  }
  :first-child th:first-of-type {
    border: none;
  }
}
</style>
