const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact',
			selected: null,
			contacts: null
		},
		actions: {
			selectContact: (contact)=>setStore({selected: contact}),
			// Use getActions to call a function within a fuction
			createAgenda: async () => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe', {
						method: 'POST'
					});
					if (!resp.ok) throw new Error('error while creating agenda')
					getActions().getUserAgenda()
					return true
				} catch (error) {
					console.error(error)
				}
			},
			createContact: async (contact) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe/contacts', {
						method:'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if (!resp.ok) throw new Error('error while creating contact')
					return getActions().getUserAgenda()
				} catch (error) {
					console.error(error)
				}
			},
			getUserAgenda:async () => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe');
					//ojo, condicion puede generar bucle infinito!!!!!
					if (resp.status==404) return getActions().createAgenda()
					if (!resp.ok) throw new Error('error while retrieving user')
					const data = await resp.json()
					setStore({contacts: data})
					return true
				} catch (error) {
					console.error(error)
				}
			},
			UpdContact:async (id, contact) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe/contacts/'+id,{
						method:'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if (!resp.ok) throw new Error('error while updating user')
					return getActions().getUserAgenda()

				} catch (error) {
					console.error(error)
				}
			},
			delContact:async (id) => {
				try {
					const resp = await fetch(getStore().url+'/agendas/pepe/contacts/'+id, {
						method: 'DELETE'
					});
					if (!resp.ok) throw new Error('error while deleting user')
					return getActions().getUserAgenda()

				} catch (error) {
					console.error(error)
				}
			},
		}
	};
};

export default getState;

