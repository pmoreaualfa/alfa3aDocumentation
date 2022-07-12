<template>
  <div>
     <img width="20px" src="@/public/logos/apigouvfr.svg" alt="logo api gouv fr" class="w-40 h-10">
    <div>
      site :
      <NuxtLink to="https://api.gouv.fr/documentation/api-geo" target="_blank">
        Documentation de API Découpage Administratif - (API Geo) - api.gouv.fr</NuxtLink
      >
    </div>

    <div class="m-2">
      Département actif :
      <input
        @change="changeCommunesActives"
        v-model="deptDefaut"
        type="number"
        placeholder="Dept"
        class="input input-bordered input-primary w-24 max-w-xm"
      />
      Nombre de communes : {{ nbrCommunes }}
    </div>

    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Code</th>
              <th>Ville</th>
              <th>Département</th>
              <th>Code Postal</th>
              <th>Population</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(com, index) in communesActives" :key="com.code">
              <th>{{ index }}</th>
              <td>{{ com.code }}</td>
              <td>{{ com.nom }}</td>
              <td>{{ com.codeDepartement }}</td>
              <td>{{ com.codesPostaux[0] }}</td>
              <td>{{ com.population }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const communesActives = useCommunesActives();
const deptDefaut = useDeptDefaut();
const nbrCommunes = useNbrCommunes();
// onMounted(async () => {
//     // const url = "/api/gouv/apigeo?dept=91";
//     const url = `/api/gouv/apigeo?dept=${deptDefaut.value}`;
//     const ret = await useFetch(url);
//     const communesData = ret.data.value;
//     const nbrCommunesRet = communesData.nbrCommunes;
//     const communesRet = communesData.communes;
//     nbrCommunes.value = nbrCommunesRet;
//     communesActives.value = communesRet;
//     return;
//   });

const changeCommunesActives = async () => {
let prefixDept = ""
if (deptDefaut.value < 10){
    prefixDept = "0"
      console.log("prefixDept : ", prefixDept);
    }
// else {
//     // const dept = deptDefaut.value
//     console.log("dept : ", ">10");
//     }

  const url = `/api/gouv/apigeo?dept=${prefixDept}${deptDefaut.value}`;
  console.log("url : ", url);
  const ret = await useFetch(url);
  const communesData = ret.data.value;
  const nbrCommunesRet = communesData.nbrCommunes;
  const communesRet = communesData.communes;
  console.log("nbrCommunesRet : ", nbrCommunesRet);
  console.log("communesRet : ", communesRet);

//   nbrCommunes.value = nbrCommunesRet;
  communesActives.value = communesRet;
  return;
};
</script>
