<template>
	<ion-page>
		<ion-header :translucent="true">
			<ion-toolbar>
				<ion-title>Create Crud</ion-title>
			</ion-toolbar>
		</ion-header>
    
		<ion-content :fullscreen="true">
            <form @submit.prevent="store">
                <ion-list>
                    <ion-item>
                        <ion-input label="Name" @input="name = $event.target.value"></ion-input>
                    </ion-item>                
                </ion-list>
                <ion-button type="submit" >Create</ion-button>
            </form>
            
			
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
import router from "@/router";
export default defineComponent({
	name: "CreateCrud",
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
        const name = ref('');

		
		const store = async () => {
            console.log(name);
            let data = {
                name: name.value
            };
			try {
				const response = await CrudServices.storage(data);
				dataApi.value = response;
                router.push('/home');
			} catch (error) {
				console.log(error);
			}
		};
		//llamamos metodo para cargar la data
		onMounted(() => {
		});
		return {
			dataApi,
            store,
            name
		};
	},
});
</script>

<style scoped></style>