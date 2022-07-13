export const useContactsActifs = () => {
    return useState('contactsActifs', ()=>[])
}

export const useNbrContacts = () => {
    const contactsActifs = useContactsActifs()
    return computed(()=>{
        return contactsActifs.value.length
    })
}
export const useContactCourant = () => {
    return useState('contactCourant', ()=>{})
}
export const useContactsRecherche = () => {
    return useState('contactsRecherche', ()=>"")
}