<template>
	<ion-page>
	  <ion-header :translucent="true">
		<ion-toolbar>
		  <ion-title>Update Crud</ion-title>
		</ion-toolbar>
	  </ion-header>
  
	  <ion-content :fullscreen="true">
		<form @submit.prevent="update">
		  <ion-list>
			<ion-item>
			  <ion-input label="Name" v-model="name"></ion-input>
			</ion-item>
		  </ion-list>
		  <ion-button type="submit">Update</ion-button>
		</form>
	  </ion-content>
	</ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput } from "@ionic/vue";
  import { defineComponent, ref, onMounted } from "vue";
  import { Crud } from "@/interfaces/Crud";
  import CrudServices from "@/services/CrudServices";
  import { IonButton } from '@ionic/vue';
  import { useRouter, useRoute } from 'vue-router';
  
  export default defineComponent({
	name: "CreateCrud",
	components: {
	  IonContent,
	  IonHeader,
	  IonPage,
	  IonTitle,
	  IonToolbar,
	  IonItem,
	  IonInput,
	  IonButton,
	},
  
	setup() {
	  const dataApi = ref<Crud[]>([]);
	  const name = ref('');
	  const router = useRouter();
	  const route = useRoute();
	  const id = route.params.id;
  
	  const update = async () => {
		let data = {
		  name: name.value
		};
		try {
		  const response = await CrudServices.update(id,data);
		  dataApi.value = response;
		  router.push('/home');
		} catch (error) {
		  console.log(error);
		}
	  };
  
	  const show = async () => {
		try {
		  const response = await CrudServices.show(id);
		  dataApi.value = response;
		  name.value = response.data.name; // Asignar el valor retornado al campo name
		} catch (error) {
		  console.log(error);
		}
	  };
  
	  onMounted(() => {
		show();
	  });
  
	  return {
		dataApi,
		update,
		name
	  };
	},
  });
  </script>
  
  <style scoped></style>
  
  