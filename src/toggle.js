
 function toggle (soughtId, objects) {
    return objects.map(object => {
        if (object.id === soughtId){
            return {...object, isOn: !object.isOn}
        }
        return object;
    })
    
}

export {toggle}