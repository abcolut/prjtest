export default {

    saveUser(state,data){
        console.log("saveUser", data)
    //     var serverDir = this.getters["getServerDir"];
    //     serverDir = ""
    //     Vue.http.post( serverDir + "saveUser.php", data)
    //         .then(response => {
    //             //console.log("saveUser",response)
    //             return response.json()}
    //         )
    //         .then(data => {
    //             //console.log("saveUser =>",data)
    //             state.commit('userSave', data)
    //         }, response => {
    //             console.error("!!! ERROR user Save ",response);
    //         });
    },

}
