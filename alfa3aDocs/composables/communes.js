export const useCommunesActives = () => {
    return useState('communesActives', ()=>[])
}
export const useDeptDefaut = () => {
    return useState('deptDefaut', ()=>91)
}

export const useNbrCommunes = () => {
    const communesActives = useCommunesActives()
    return computed(()=>{
        return communesActives.value.length
    })
}