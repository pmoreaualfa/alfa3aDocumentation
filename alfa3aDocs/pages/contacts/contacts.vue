<template>
  <div>
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<!-- CONTACT COURANT -->
      <div v-if="contactCourant" class="card w-full bg-primary shadow-xl p-1 mb-12">
        <div class="card-body p-2 py-4 grid grid-cols-3 gap-1">
        <div>
        <h3>{{ contactCourant.CIV }}</h3>
          <h2 class="card-title text-secundary text-lg">
            {{ contactCourant.PRENOM }} {{ contactCourant.NOM }}
          </h2>
        </div>
          <p class="text-sm">
            <span class="text-lg">
            {{ contactCourant.fonctions[0].entite }}
            </span>
            <br />
            {{ contactCourant.fonctions[0].Fonction }}
            <br />
            {{ contactCourant.fonctions[0].COURRIEL }}
            <br />
            {{ contactCourant.fonctions[0].TelephoneChiffres }}
          </p>
          <div>
             <img src="../../public/icons/pencil.svg"
              @click="contactFindOne(`${c._id}`)"
              class="btn bg-secondary py-4 w-20 h-20"
            />

          </div>
        </div>
      </div>
      <!-- <div>{{contactCourant}}</div> -->

      <!-- FIN CONTACT COURANT -->
<div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Recherche</span>
  </label>
  <input @change="contactsFind" v-model="recherche" type="text" placeholder="saisie recherche" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text-alt"> </span>
    <span class="label-text-alt">Nom Prénom Fonction Entité</span>
  </label>
  {{recherche}}
</div>
</div>
        50 premiers contacts :
        <button @click="changeContactsActifs" class="btn btn-secondary">Contacts</button>
        <div>Nombre de contacts : {{ nbrContacts }}</div>

        <!-- <div>{{contactsActifs}}</div> -->

        <div class="grid grid-cols-3 gap-1">
          <div v-for="c in contactsActifs" class="card w-80 bg-base-100 shadow-xl p-1">
            <div class="card-body p-2 py-4">
              <h2 class="card-title text-alfa-orange text-lg">
                {{ c.NOM }} {{ c.PRENOM }}
              </h2>
              <p class="text-sm">
                Fonction : {{ c.fonctions[0].Fonction }}
                <br />
                courriel : {{ c.fonctions[0].COURRIEL }}
              </p>
              <div class="card-actions justify-end">
                <img src="../../public/icons/eye.svg" 
                  @click="contactFindOne(`${c._id}`)"
                  class="btn bg-secondary text-xs p-2 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactsActifs = useContactsActifs();
const nbrContacts = useNbrContacts();
const contactCourant = useContactCourant();
const recherche = ref("");
// const recherche = useContactsRecherche();



const changeContactsActifs = async () => {
  const url = `/api/mongoCall/contacts`;
  //   console.log("url : ", url);
  const { data } = await useFetch(url);
  //   console.log("contactsData : ", contactsData.value);
  contactsActifs.value = data;
  return;
};

const contactFindOne = async (cid) => {
  const url = `/api/mongoCall/contacts?id=${cid}`;
  const { data } = await useFetch(url);
  console.log("data : ", data.value);
  contactCourant.value = data.value;
  return;
};

const contactsFind = async () => {
    const rech = recherche.value
    console.log('rech : ', rech)
//   const url = `/api/mongoCall/contacts?rech=${rech}`;
//   const { data } = await useFetch(url);
//   console.log("data : ", data.value);
//   contactCourant.value = data.value;
//   contactsActifs.value = data;
//   return;
};
</script>
