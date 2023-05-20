<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>Crud</ion-title>
			</ion-toolbar>
		</ion-header>
    
		<ion-content :fullscreen="true">
      <ion-button href="/crud/create">Create</ion-button>
			<ion-list>
				<ion-list-header lines="inset">
					<ion-label>List Crud</ion-label>
				</ion-list-header>
				<div v-for="item in dataApi.data" :key="item.id">
					<ion-item>
						<ion-avatar>
							<ion-icon
								style="color: red"
								size="large"
							/>
						</ion-avatar>
						<ion-label>
							<h2>{{ item.name }}</h2>		
              <ion-button :href="`/crud/update/${item.id}`" color="success">modify</ion-button>			
              <ion-button href="" color="danger">delete</ion-button>				
						</ion-label>
					</ion-item>
				</div>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonIcon,
	IonItem,
	IonLabel,
	IonListHeader,
} from "@ionic/vue";
import { defineComponent, ref, onMounted } from "vue";
import { Crud } from "@/interfaces/Crud";
import CrudServices from "@/services/CrudServices";
import { IonButton } from '@ionic/vue';
export default defineComponent({
	name: "HomePage",
	components: {
		IonContent,
		IonHeader,
		IonPage,
		IonTitle,
		IonToolbar,
		IonItem,
		IonLabel,
		IonListHeader,
		IonIcon,
    IonButton
	},

	setup() {
		const dataApi = ref<Crud[]>([]);

		//metodo para obtener la data de la api
		const index = async () => {
			try {
				const response = await CrudServices.index();
				dataApi.value = response;
			} catch (error) {
				console.log(error);
			}
		};
		//llamamos metodo para cargar la data
		onMounted(() => {
			index();
		});
		return {
			dataApi
		};
	},
});
</script>

<style scoped></style>